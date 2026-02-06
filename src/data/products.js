import LeatherHandbag from '../assets/leather-handbag.webp'
import GoldEarrings from '../assets/gold-hoop-earrings.webp'
import LeatherBelt from '../assets/leather-belt.webp'
import SilkScarf from '../assets/silk-scarf.jpg'
import WovenStrawBag from '../assets/woven-straw-bag.avif'
import CulotteCropPants from '../assets/cullote-crop-pants.webp'
import LeatherLeggings from '../assets/leather-leggings.jpg'
import TailoredTrousers from '../assets/tailored-trousers.jpg'
import WideLegLinenPants from '../assets/wide-leg-linen-pants.webp'
import HighWaistJeans from '../assets/high-waist-jeans.webp'
import BowTieBlouse from '../assets/bow-tie-blouse.jpg'
import EmbroideredPeasantBlouse from '../assets/embroidered-peasant-blouse.webp'
import LinenPoplinBlouse from '../assets/linen-poplin-blouse.jpg'
import RuffleBlouse from '../assets/ruffle-blouse.webp'
import SilkBlouse from '../assets/silk-blouse.jpg'
import SatinSlipDress from '../assets/satin-slip-dress-sale.jpg'
import GoldEarringsSale from '../assets/gold-earrings-sale.avif'
import HighWaistJeansSale from '../assets/high-waist-jeans-sale.webp'
import SequinMiniDress from '../assets/sequin-mini-dress.webp'
import LinenShirtDress from '../assets/linen-shirt-dress.webp'
import LinenShirtDressGreen from '../assets/linen-shirt-dress-green.webp'
import SatinSlipDressNotSale from '../assets/satin-slip-dress.webp'
import FloralWrapDress from '../assets/floral-wrap-dress.webp'
import SequinMiniDressBlack from '../assets/sequin-mini-dress-black.webp'
import VelvetMidiDress from '../assets/velvet-midi-dress.webp'

export const products = [
  // Dresses (5)
  {
    id: 1,
    name: "Velvet Midi Dress",
    category: "Dresses",
    price: 129.9,
    image: VelvetMidiDress,
    description: "Elegant velvet finish, perfect for evening occasions."
  },
  {
    id: 2,
    name: "Floral Wrap Dress",
    category: "Dresses",
    price: 99.0,
    image: FloralWrapDress,
    description: "Lightweight wrap dress with a delicate floral print."
  },
  {
    id: 3,
    name: "Satin Slip Dress",
    category: "Dresses",
    price: 149.5,
    image: SatinSlipDressNotSale,
    description: "Smooth satin slip that drapes beautifully for a sleek silhouette."
  },
  {
    id: 4,
    name: "Linen Shirt Dress",
    category: "Dresses",
    price: 69.0,
    image: LinenShirtDressGreen,
    description: "Breathable linen with a relaxed, everyday fit."
  },
  {
    id: 5,
    name: "Sequin Mini Dress",
    category: "Dresses",
    price: 179.0,
    image: SequinMiniDress,
    description: "Sparkling sequin mini for bold night-out looks."
  },

  // Accessories (5)
  {
    id: 6,
    name: "Leather Handbag",
    category: "Accessories",
    price: 299.0,
    image: LeatherHandbag,
    description: "Genuine leather tote with minimal hardware and structured shape."
  },
  {
    id: 7,
    name: "Woven Straw Bag",
    category: "Accessories",
    price: 89.0,
    image: WovenStrawBag,
    description: "Handwoven straw bag ideal for summer outings."
  },
  {
    id: 8,
    name: "Gold Hoop Earrings",
    category: "Accessories",
    price: 49.5,
    image: GoldEarrings,
    description: "Classic gold hoops with a polished finish."
  },
  {
    id: 9,
    name: "Silk Scarf",
    category: "Accessories",
    price: 39.99,
    image: SilkScarf,
    description: "Lightweight silk scarf with vibrant print."
  },
  {
    id: 10,
    name: "Leather Belt",
    category: "Accessories",
    price: 59.0,
    image: LeatherBelt,
    description: "Smooth leather belt with brushed metal buckle."
  },

  // Blouses (5)
  {
    id: 11,
    name: "Silk Blouse",
    category: "Blouses",
    price: 289.9,
    image: SilkBlouse,
    description: "Pure silk blouse with a modern, tailored cut."
  },
  {
    id: 12,
    name: "Ruffle Blouse",
    category: "Blouses",
    price: 69.0,
    image: RuffleBlouse,
    description: "Lightweight blouse with delicate ruffle detailing."
  },
  {
    id: 13,
    name: "Bow-Tie Blouse",
    category: "Blouses",
    price: 74.5,
    image: BowTieBlouse,
    description: "Sophisticated blouse with a bow-tie neck for polished looks."
  },
  {
    id: 14,
    name: "Linen Poplin Blouse",
    category: "Blouses",
    price: 59.99,
    image: LinenPoplinBlouse,
    description: "Crisp poplin with linen blend for breathable comfort."
  },
  {
    id: 15,
    name: "Embroidered Peasant Blouse",
    category: "Blouses",
    price: 84.0,
    image: EmbroideredPeasantBlouse,
    description: "Boho-inspired blouse with intricate embroidery."
  },

  // Pants (5)
  {
    id: 16,
    name: "Tailored Trousers",
    category: "Pants",
    price: 310.0,
    image: TailoredTrousers,
    description: "High-waist tailored trousers for a polished silhouette."
  },
  {
    id: 17,
    name: "High-Waist Jeans",
    category: "Pants",
    price: 49.99,
    image: HighWaistJeans,
    description: "Classic denim with flattering high-rise cut."
  },
  {
    id: 18,
    name: "Wide-Leg Linen Pants",
    category: "Pants",
    price: 89.5,
    image: WideLegLinenPants,
    description: "Relaxed wide-leg linen trousers for warm days."
  },
  {
    id: 19,
    name: "Culotte Crop Pants",
    category: "Pants",
    price: 79.0,
    image: CulotteCropPants,
    description: "Versatile culottes with a cropped hem for easy styling."
  },
  {
    id: 20,
    name: "Leather Leggings",
    category: "Pants",
    price: 129.0,
    image: LeatherLeggings,
    description: "Stretch leather-look leggings for edgy evening looks."
  },

  // Sale (5)
  {
    id: 21,
    name: "Sequin Mini Dress (Sale)",
    category: "Sale",
    price: 99.0,
    image: SequinMiniDress,
    description: "Party-ready sequin mini at a special sale price."
  },
  {
    id: 22,
    name: "Linen Shirt Dress (Sale)",
    category: "Sale",
    price: 55.0,
    image: LinenShirtDress,
    description: "Casual linen shirt dress available at a reduced price."
  },
  {
    id: 23,
    name: "Gold Hoop Earrings (Sale)",
    category: "Sale",
    price: 29.99,
    image: GoldEarringsSale,
    description: "Timeless hoops offered in the sale collection."
  },
  {
    id: 24,
    name: "High-Waist Jeans (Sale)",
    category: "Sale",
    price: 69.99,
    image: HighWaistJeansSale,
    description: "Wardrobe staple jeans at a discounted price."
  },
  {
    id: 25,
    name: "Satin Slip Dress (Sale)",
    category: "Sale",
    price: 119.0,
    image: SatinSlipDress,
    description: "Satin slip available now as part of our sale."
  }
];
