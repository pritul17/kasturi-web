"use client";

import fallbackData from '@data/sliders/testimonial';

// Firebase live reviews disabled — using static data from testimonial.json
// To re-enable: uncomment the block below and restore the imports:
//   import { useState, useEffect } from 'react';
//   import { collection, getDocs, orderBy, query } from 'firebase/firestore';
//   import { db } from './firebase';
//
//   useEffect(() => {
//     const fetchReviews = async () => {
//       try {
//         const q = query(collection(db, 'reviews'), orderBy('order'));
//         const snapshot = await getDocs(q);
//         if (!snapshot.empty) {
//           const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
//           setReviews(items);
//         }
//       } catch (err) {
//         console.warn('Reviews fetch failed, using fallback:', err.message);
//       }
//     };
//     fetchReviews();
//   }, []);

export function useReviews() {
  return { reviews: fallbackData.items, loading: false };
}
