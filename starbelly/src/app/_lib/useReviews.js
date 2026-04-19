"use client";

import { useState, useEffect } from 'react';
import { collection, getDocs, orderBy, query } from 'firebase/firestore';
import { db } from './firebase';
import fallbackData from '@data/sliders/testimonial';

export function useReviews() {
  const [reviews, setReviews] = useState(fallbackData.items);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        const q = query(collection(db, 'reviews'), orderBy('order'));
        const snapshot = await getDocs(q);
        if (!snapshot.empty) {
          const items = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
          setReviews(items);
        }
      } catch (err) {
        // Firebase unavailable — keep fallback data
        console.warn('Reviews fetch failed, using fallback:', err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, []);

  return { reviews, loading };
}
