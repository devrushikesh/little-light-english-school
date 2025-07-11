// Firebase utility functions for Little Light A play School

import { 
  collection, 
  addDoc, 
  getDocs, 
  doc, 
  updateDoc, 
  deleteDoc,
  query,
  orderBy,
  where,
  serverTimestamp
} from "firebase/firestore";
import { 
  ref, 
  uploadBytes, 
  getDownloadURL,
} from "firebase/storage";
import { db, storage } from "./firebase";

// Collection names
export const COLLECTIONS = {
  ADMISSIONS: 'admissions',
  GALLERY: 'gallery',
  CONTACTS: 'contacts',
  ANNOUNCEMENTS: 'announcements',
  TESTIMONIALS: 'testimonials'
};

// Admission Functions
export const submitAdmissionForm = async (formData, files = {}) => {
  try {
    const submissionData = {
      ...formData,
      submittedAt: serverTimestamp(),
      status: 'pending'
    };

    // Upload files if provided
    if (files.aadharFile) {
      const aadharRef = ref(storage, `admissions/aadhar/${Date.now()}_${files.aadharFile.name}`);
      const aadharSnapshot = await uploadBytes(aadharRef, files.aadharFile);
      submissionData.aadharUrl = await getDownloadURL(aadharSnapshot.ref);
    }

    if (files.studentPhoto) {
      const photoRef = ref(storage, `admissions/photos/${Date.now()}_${files.studentPhoto.name}`);
      const photoSnapshot = await uploadBytes(photoRef, files.studentPhoto);
      submissionData.studentPhotoUrl = await getDownloadURL(photoSnapshot.ref);
    }

    const docRef = await addDoc(collection(db, COLLECTIONS.ADMISSIONS), submissionData);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error submitting admission form:", error);
    return { success: false, error: error.message };
  }
};

// Contact Form Functions
export const submitContactForm = async (contactData) => {
  try {
    const submissionData = {
      ...contactData,
      submittedAt: serverTimestamp(),
      status: 'new'
    };

    const docRef = await addDoc(collection(db, COLLECTIONS.CONTACTS), submissionData);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error submitting contact form:", error);
    return { success: false, error: error.message };
  }
};

// Gallery Functions
export const uploadGalleryImage = async (file, category = 'general', description = '') => {
  try {
    const imageRef = ref(storage, `gallery/${category}/${Date.now()}_${file.name}`);
    const snapshot = await uploadBytes(imageRef, file);
    const downloadURL = await getDownloadURL(snapshot.ref);

    const galleryData = {
      url: downloadURL,
      category,
      description,
      filename: file.name,
      uploadedAt: serverTimestamp()
    };

    const docRef = await addDoc(collection(db, COLLECTIONS.GALLERY), galleryData);
    return { success: true, id: docRef.id, url: downloadURL };
  } catch (error) {
    console.error("Error uploading gallery image:", error);
    return { success: false, error: error.message };
  }
};

export const getGalleryImages = async (category = null) => {
  try {
    let q;
    if (category) {
      q = query(
        collection(db, COLLECTIONS.GALLERY),
        where("category", "==", category),
        orderBy("uploadedAt", "desc")
      );
    } else {
      q = query(
        collection(db, COLLECTIONS.GALLERY),
        orderBy("uploadedAt", "desc")
      );
    }

    const querySnapshot = await getDocs(q);
    const images = [];
    querySnapshot.forEach((doc) => {
      images.push({ id: doc.id, ...doc.data() });
    });

    return { success: true, images };
  } catch (error) {
    console.error("Error fetching gallery images:", error);
    return { success: false, error: error.message };
  }
};

// Announcements Functions
export const getAnnouncements = async () => {
  try {
    const q = query(
      collection(db, COLLECTIONS.ANNOUNCEMENTS),
      orderBy("createdAt", "desc")
    );

    const querySnapshot = await getDocs(q);
    const announcements = [];
    querySnapshot.forEach((doc) => {
      announcements.push({ id: doc.id, ...doc.data() });
    });

    return { success: true, announcements };
  } catch (error) {
    console.error("Error fetching announcements:", error);
    return { success: false, error: error.message };
  }
};

// Testimonials Functions
export const getTestimonials = async () => {
  try {
    const q = query(
      collection(db, COLLECTIONS.TESTIMONIALS),
      where("approved", "==", true),
      orderBy("createdAt", "desc")
    );

    const querySnapshot = await getDocs(q);
    const testimonials = [];
    querySnapshot.forEach((doc) => {
      testimonials.push({ id: doc.id, ...doc.data() });
    });

    return { success: true, testimonials };
  } catch (error) {
    console.error("Error fetching testimonials:", error);
    return { success: false, error: error.message };
  }
};

export const submitTestimonial = async (testimonialData) => {
  try {
    const submissionData = {
      ...testimonialData,
      createdAt: serverTimestamp(),
      approved: false // Will need admin approval
    };

    const docRef = await addDoc(collection(db, COLLECTIONS.TESTIMONIALS), submissionData);
    return { success: true, id: docRef.id };
  } catch (error) {
    console.error("Error submitting testimonial:", error);
    return { success: false, error: error.message };
  }
};

// Admin Functions (for future use)
export const getAdmissionApplications = async () => {
  try {
    const q = query(
      collection(db, COLLECTIONS.ADMISSIONS),
      orderBy("submittedAt", "desc")
    );

    const querySnapshot = await getDocs(q);
    const applications = [];
    querySnapshot.forEach((doc) => {
      applications.push({ id: doc.id, ...doc.data() });
    });

    return { success: true, applications };
  } catch (error) {
    console.error("Error fetching admission applications:", error);
    return { success: false, error: error.message };
  }
};

export const updateApplicationStatus = async (applicationId, status) => {
  try {
    const applicationRef = doc(db, COLLECTIONS.ADMISSIONS, applicationId);
    await updateDoc(applicationRef, {
      status,
      updatedAt: serverTimestamp()
    });

    return { success: true };
  } catch (error) {
    console.error("Error updating application status:", error);
    return { success: false, error: error.message };
  }
};
