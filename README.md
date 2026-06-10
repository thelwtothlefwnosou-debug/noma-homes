# Noma Homes — Mid-term Rental Website

Κανονικό Next.js site project, έτοιμο για Vercel.

## Τι είναι
Premium mid-term rental marketplace, εμπνευσμένο από την κατηγορία της Ukio, αλλά με δικό μας όνομα, δικό μας design και δική μας δομή.

## Περιλαμβάνει
- Homepage
- Search bar
- Listings grid
- Apartment detail pages
- How it works
- Corporate housing section
- Host section
- Login / signup demo modals
- Responsive layout για κινητό
- Mock data για ακίνητα

## Πώς το ανεβάζεις live στο Vercel

### Εύκολος τρόπος
1. Πήγαινε στο https://vercel.com
2. Κάνε login με Google ή GitHub.
3. Πάτα **Add New → Project**.
4. Ανέβασε αυτόν τον φάκελο σε GitHub ή κάνε import από GitHub.
5. Πάτα **Deploy**.
6. Θα πάρεις link τύπου `https://noma-homes....vercel.app`.

### Τοπικό άνοιγμα στον υπολογιστή
Χρειάζεται Node.js.

```bash
npm install
npm run dev
```

Μετά άνοιξε:
```bash
http://localhost:3000
```

## Επόμενη κανονική έκδοση
Για να γίνει πραγματική εφαρμογή θέλει:
- Supabase για βάση δεδομένων
- Authentication
- Admin panel για hosts
- Upload φωτογραφιών
- Booking requests
- Payments με Stripe
