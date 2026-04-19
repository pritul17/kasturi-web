/**
 * Run once to seed real Kasturi Google reviews into Firestore:
 *   node scripts/seed-reviews.mjs
 *
 * Requires: NEXT_PUBLIC_FIREBASE_* env vars in .env.local
 */

import { readFileSync } from 'fs';
import { initializeApp } from 'firebase/app';
import { getFirestore, collection, addDoc, getDocs, deleteDoc } from 'firebase/firestore';

// Load .env.local manually
const envRaw = readFileSync(new URL('../.env.local', import.meta.url), 'utf8');
const env = Object.fromEntries(
  envRaw.split('\n')
    .filter(l => l && !l.startsWith('#'))
    .map(l => l.split('=').map(s => s.trim()))
);

const firebaseConfig = {
  apiKey: env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: env.NEXT_PUBLIC_FIREBASE_APP_ID,
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// Real Google reviews from Kasturi Wrocław (4.9 ★ · 334 reviews) — anonymized
const realReviews = [
  { title: "A perfect, authentic place", name: "Google Reviewer", rating: 5, image: "/img/faces/1.jpg", text: "A perfect, authentic and atmospheric place. The menu is not too long, however full of delicious, genuine positions. The flavors reminded me of my childhood spent in India and Sahaja Yoga Ashrams. The dishes could be more spicy — but just ask for the Indian level of spiciness!", order: 1 },
  { title: "Świetna restauracja", name: "Google Reviewer", rating: 5, image: "/img/faces/2.jpg", text: "Restauracja o prosto urządzonym wnętrzu, nie ma bardzo dużo miejsc siedzących, ale wydaje się, że nawet przy całym pełnym lokalu każdy będzie miał wystarczająco przestrzeni, stoliki są odpowiednio szerokie. Plusem jest to, że restauracja posiada menu online. Bardzo polecam!", order: 2 },
  { title: "Jedna z najlepszych knajp", name: "Google Reviewer", rating: 5, image: "/img/faces/3.jpg", text: "Jedna z najlepszych knajp w których ostatnio miałam okazję zjeść. Jedzenie było pyszne, dobrze doprawione, i w ogóle nie monotonne. Zamówiliśmy napoje lassi — najlepszy jaki piłam! Definitywnie polecam i chętnie wrócę.", order: 3 },
  { title: "Restaurant Week — nie żałujemy!", name: "Google Reviewer", rating: 5, image: "/img/faces/4.jpg", text: "Restaurant Week skłonił nas do zabawy w rezerwacje. I tak oto znaleźliśmy się w KASTURI. I nie żałujemy! Przytulne, ale proste wnętrze, jasne i czyste. Jedzenie przepyszne, deser Gulab Jamun podbił nasze serca!", order: 4 },
  { title: "Pyszne hinduskie dania", name: "Google Reviewer", rating: 5, image: "/img/faces/1.jpg", text: "Pyszne hinduskie dania, polecam szczególnie pikantną baraninę laal maas. Super desery oraz aromatyczna pikantna herbata (dzbanuszek całkiem spory), czaj z mlekiem także bardzo dobry. Bardzo ładna zastawa. Pomocna i miła obsługa.", order: 5 },
  { title: "Gorąco polecam! 10/10", name: "Google Reviewer", rating: 5, image: "/img/faces/2.jpg", text: "Gorąco polecam! Jedzenie jest 10/10. Sos butter masala był idealnie kremowy, delikatny i aromatyczny. Ser paneer miał perfekcyjną konsystencję. Obsługa — pełen profesjonalizm!", order: 6 },
  { title: "Fantastic restaurant!", name: "Google Reviewer", rating: 5, image: "/img/faces/3.jpg", text: "Fantastic restaurant! The taste of the food, tea and mango lassi was outstanding. Highly recommend this place.", order: 7 },
  { title: "Jedna z ulubionych restauracji", name: "Google Reviewer", rating: 5, image: "/img/faces/4.jpg", text: "Jedna z moich ulubionych restauracji we Wrocławiu. Odwiedzam regularnie, szczególnie ze względu na ogromny wybór dań bezglutenowych. Super klimat i obsługa pierwsza klasa!", order: 8 },
  { title: "Wspaniałe indyjskie jedzenie", name: "Google Reviewer", rating: 5, image: "/img/faces/1.jpg", text: "Wspaniałe indyjskie jedzenie! Dania pełne smaków, wyważone, doskonale podane w towarzystwie naan. Obsługa miła, rzetelna, opowiada o jedzeniu. Zdecydowanie numer 1 we Wrocławiu.", order: 9 },
  { title: "Świetne miejsce z autentyczną kuchnią", name: "Google Reviewer", rating: 5, image: "/img/faces/2.jpg", text: "Świetne miejsce z autentyczną kuchnią. Bardzo przystępne ceny, jak na takie dania — na spokojnie można wziąć przystawkę do głównego dania i nie wydać fortuny. Wszystko bardzo szybko podane i czuliśmy się zaopiekowani.", order: 10 },
  { title: "Very good experience", name: "Google Reviewer", rating: 5, image: "/img/faces/3.jpg", text: "It was overall a very good experience — good food, reasonable prices, good ambience although it has limited tables, and good service too handled in a very perfect way.", order: 11 },
  { title: "Strzał w dziesiątkę!", name: "Google Reviewer", rating: 5, image: "/img/faces/4.jpg", text: "Wybrałam z mamą restaurację Kasturi w ramach Restaurant Week. To był strzał w dziesiątkę! Jesteśmy bardzo pozytywnie zaskoczone — lokal niepozorny a jedzenie wyśmienite, niesamowite połączenie smaków, estetycznie podane. Bardzo uprzejma obsługa.", order: 12 },
];

async function seed() {
  const reviewsCol = collection(db, 'reviews');

  // Clear existing
  const existing = await getDocs(reviewsCol);
  for (const doc of existing.docs) {
    await deleteDoc(doc.ref);
  }
  console.log(`Cleared ${existing.size} existing reviews.`);

  // Insert real reviews
  for (const review of realReviews) {
    await addDoc(reviewsCol, review);
    console.log(`Added: ${review.title}`);
  }

  console.log(`\nDone! Seeded ${realReviews.length} reviews to Firestore.`);
  process.exit(0);
}

seed().catch(err => {
  console.error(err);
  process.exit(1);
});
