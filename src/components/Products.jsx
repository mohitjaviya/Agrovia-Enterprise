import React, { useState } from 'react';
import { ArrowRight, Leaf, Flame, Droplets, X, ChevronRight, Star, Package, Thermometer, Globe } from 'lucide-react';
import './Products.css';

// ── Images ──────────────────────────────────────────────────────────────────
import garlicMinced  from '../assets/garlic_minced.png';
import garlicChopped from '../assets/garlic_chopped.png';
import garlicFlakes  from '../assets/garlic_flakes.png';
import garlicPowder  from '../assets/garlic_powder.png';

// Pink Onion (Red/Rose variety)
import pinkOnionMinced  from '../assets/pink_onion_minced.png';
import pinkOnionChopped from '../assets/pink_onion_chopped.png';
import pinkOnionFlakes  from '../assets/onion_flakes.png';   // shared
import pinkOnionPowder  from '../assets/onion_powder.png';   // shared

// White Onion variety
import whiteOnionMinced  from '../assets/white_onion_minced.png';
import whiteOnionChopped from '../assets/white_onion_chopped.png';
import whiteOnionFlakes  from '../assets/white_onion_flakes.png';
import whiteOnionPowder  from '../assets/white_onion_powder.png';

import corianderPowder  from '../assets/coriander_powder.png';
import cuminPowder      from '../assets/cumin_powder.png';
import turmericPowder   from '../assets/turmeric_powder.png';
import redChilliPowder  from '../assets/red_chilli_powder.png';

import naturalHoney    from '../assets/natural_honey.png';
import jeeraHoney      from '../assets/jeera_honey.png'; // Will reuse image var name but it's Raw Ajwain Honey
import dryFruitsHoney  from '../assets/dry_fruits_honey.png';

// ── Data ─────────────────────────────────────────────────────────────────────
const garlicProducts = [
  {
    id: 'garlic-minced',
    name: 'Minced Garlic',
    image: garlicMinced,
    badge: 'Best Seller',
    shortDesc: 'Finely minced dehydrated garlic, perfect for sauces, marinades & ready-to-eat meals.',
    details: {
      overview: 'Our premium Minced Garlic is made from fresh, hand-selected garlic bulbs processed under strict hygiene standards. Ideal for food manufacturers, restaurant chains, and international distributors.',
      specs: [
        { label: 'Form', value: 'Minced (2–3 mm)' },
        { label: 'Moisture', value: '≤ 5%' },
        { label: 'Colour', value: 'Creamy White' },
        { label: 'Pungency', value: 'Strong & Authentic' },
        { label: 'Shelf Life', value: '24 months' },
        { label: 'Packaging', value: '25 kg PP Bags / Custom' },
      ],
      uses: ['Pasta & Sauces', 'Marinades', 'Ready-to-Eat Meals', 'Soups & Seasonings'],
    },
  },
  {
    id: 'garlic-chopped',
    name: 'Chopped Garlic',
    image: garlicChopped,
    badge: 'Export Grade',
    shortDesc: 'Uniformly chopped garlic pieces retaining authentic pungency and aroma.',
    details: {
      overview: 'Chopped Garlic from Agrovia Enterprise is processed using advanced dehydration technology, ensuring uniform texture and maximum flavor retention across every batch.',
      specs: [
        { label: 'Form', value: 'Chopped (3–5 mm)' },
        { label: 'Moisture', value: '≤ 5%' },
        { label: 'Colour', value: 'Light Yellow-White' },
        { label: 'Pungency', value: 'High' },
        { label: 'Shelf Life', value: '24 months' },
        { label: 'Packaging', value: '25 kg PP Bags / Custom' },
      ],
      uses: ['Pizza Toppings', 'Bread & Bakery', 'Spice Blends', 'Soups & Stews'],
    },
  },
  {
    id: 'garlic-flakes',
    name: 'Garlic Flakes',
    image: garlicFlakes,
    badge: 'Premium',
    shortDesc: 'Crispy golden-white garlic flakes with intense flavor, perfect for toppings and blends.',
    details: {
      overview: 'Garlic Flakes are thinly sliced and carefully dehydrated to preserve the full spectrum of garlic\'s natural flavor and aroma. A premium choice for gourmet food producers worldwide.',
      specs: [
        { label: 'Form', value: 'Flakes (5–8 mm)' },
        { label: 'Moisture', value: '≤ 5%' },
        { label: 'Colour', value: 'Golden White' },
        { label: 'Texture', value: 'Crispy & Uniform' },
        { label: 'Shelf Life', value: '24 months' },
        { label: 'Packaging', value: '25 kg PP Bags / Custom' },
      ],
      uses: ['Pizza & Pasta Garnish', 'Seasoning Mixes', 'Snack Coatings', 'Bread Toppings'],
    },
  },
  {
    id: 'garlic-powder',
    name: 'Garlic Powder',
    image: garlicPowder,
    badge: 'Global Export',
    shortDesc: 'Fine aromatic garlic powder — a staple spice for cuisines around the world.',
    details: {
      overview: 'Our Garlic Powder is milled to a fine consistency from high-quality dehydrated garlic, offering consistent flavor and aroma in every gram. Widely exported to North America, Europe, and Southeast Asia.',
      specs: [
        { label: 'Form', value: 'Powder (60–80 Mesh)' },
        { label: 'Moisture', value: '≤ 4%' },
        { label: 'Colour', value: 'Creamy White' },
        { label: 'Granulometry', value: '60–80 Mesh' },
        { label: 'Shelf Life', value: '24 months' },
        { label: 'Packaging', value: '25 kg PP Bags / Custom' },
      ],
      uses: ['Spice Blends', 'Dry Rubs', 'Dips & Dressings', 'Instant Noodles'],
    },
  },
];

// ── Pink Onion (Rose / Red variety) ─────────────────────────────────────────
const pinkOnionProducts = [
  {
    id: 'pink-onion-minced',
    name: 'Pink Onion — Minced',
    image: pinkOnionMinced,
    badge: 'Best Seller',
    shortDesc: 'Finely minced dehydrated pink onion — rich colour, bold flavour for premium food processing.',
    details: {
      overview: 'Our Pink (Red) Onion Minced is made from select rose-red onion varieties, known for their vivid colour and sharp, pungent taste. Ideal for gourmet sauces, marinades, and ready-to-eat products.',
      specs: [
        { label: 'Form', value: 'Minced (2–3 mm)' },
        { label: 'Moisture', value: '≤ 5%' },
        { label: 'Colour', value: 'Pinkish-Red' },
        { label: 'Pungency', value: 'Strong & Bold' },
        { label: 'Shelf Life', value: '24 months' },
        { label: 'Packaging', value: '25 kg PP Bags / Custom' },
      ],
      uses: ['Gourmet Sauces', 'Marinades', 'Ready-to-Eat Meals', 'Food Processing'],
    },
  },
  {
    id: 'pink-onion-chopped',
    name: 'Pink Onion — Chopped',
    image: pinkOnionChopped,
    badge: 'Export Grade',
    shortDesc: 'Uniformly chopped pink onion pieces — vibrant colour and robust flavour in every bite.',
    details: {
      overview: 'Precision-chopped to 3–5 mm pieces, our Pink Onion Chopped delivers a beautiful colour and intense flavour profile. Widely used in pizza toppings, gourmet blends, and artisan food products.',
      specs: [
        { label: 'Form', value: 'Chopped (3–5 mm)' },
        { label: 'Moisture', value: '≤ 5%' },
        { label: 'Colour', value: 'Deep Rose-Pink' },
        { label: 'Pungency', value: 'High' },
        { label: 'Shelf Life', value: '24 months' },
        { label: 'Packaging', value: '25 kg PP Bags / Custom' },
      ],
      uses: ['Pizza Toppings', 'Gourmet Blends', 'Spice Mixes', 'Curries & Stews'],
    },
  },
  {
    id: 'pink-onion-flakes',
    name: 'Pink Onion — Flakes',
    image: pinkOnionFlakes,
    badge: 'Premium',
    shortDesc: 'Crispy pink onion flakes with a beautifully rich colour — perfect for toppings and seasoning.',
    details: {
      overview: 'Thinly sliced and dehydrated from premium pink onions, these flakes offer a distinctive rosy hue and bold onion flavour. A favourite in gourmet kitchens and artisan seasoning brands worldwide.',
      specs: [
        { label: 'Form', value: 'Flakes (5–8 mm)' },
        { label: 'Moisture', value: '≤ 5%' },
        { label: 'Colour', value: 'Rosy Pink-Beige' },
        { label: 'Texture', value: 'Crispy & Uniform' },
        { label: 'Shelf Life', value: '24 months' },
        { label: 'Packaging', value: '25 kg PP Bags / Custom' },
      ],
      uses: ['Artisan Breads', 'Snack Coatings', 'Seasoning Mixes', 'Instant Soups'],
    },
  },
  {
    id: 'pink-onion-powder',
    name: 'Pink Onion — Powder',
    image: pinkOnionPowder,
    badge: 'Global Export',
    shortDesc: 'Fine pink onion powder with deep colour and strong aroma — a premium spice blend ingredient.',
    details: {
      overview: 'Ground from the finest dehydrated pink onions, our Pink Onion Powder retains a characteristic rosy tint and sharp flavour. Ideal for colourful spice blends, dressings, and premium seasoning mixes.',
      specs: [
        { label: 'Form', value: 'Powder (60–80 Mesh)' },
        { label: 'Moisture', value: '≤ 4%' },
        { label: 'Colour', value: 'Pale Pinkish Beige' },
        { label: 'Granulometry', value: '60–80 Mesh' },
        { label: 'Shelf Life', value: '24 months' },
        { label: 'Packaging', value: '25 kg PP Bags / Custom' },
      ],
      uses: ['Premium Spice Blends', 'Dressings & Dips', 'Snack Seasonings', 'Dry Rubs'],
    },
  },
];

// ── White Onion ──────────────────────────────────────────────────────────────
const whiteOnionProducts = [
  {
    id: 'white-onion-minced',
    name: 'White Onion — Minced',
    image: whiteOnionMinced,
    badge: 'Best Seller',
    shortDesc: 'Finely minced dehydrated white onion — mild, sweet flavour ideal for industrial food use.',
    details: {
      overview: 'White Onion Minced from Agrovia Enterprise is processed from premium white onion varieties prized for their mild, slightly sweet flavour. Perfect for soups, gravies, and light-coloured sauces.',
      specs: [
        { label: 'Form', value: 'Minced (2–3 mm)' },
        { label: 'Moisture', value: '≤ 5%' },
        { label: 'Colour', value: 'Creamy White' },
        { label: 'Pungency', value: 'Mild & Sweet' },
        { label: 'Shelf Life', value: '24 months' },
        { label: 'Packaging', value: '25 kg PP Bags / Custom' },
      ],
      uses: ['White Sauces', 'Soups & Chowders', 'Light Gravies', 'Ready-to-Eat Meals'],
    },
  },
  {
    id: 'white-onion-chopped',
    name: 'White Onion — Chopped',
    image: whiteOnionChopped,
    badge: 'Export Grade',
    shortDesc: 'Uniformly chopped white onion pieces — clean colour, mild taste, great for light cuisine.',
    details: {
      overview: 'Our White Onion Chopped is precision-cut to uniform 3–5 mm pieces and dehydrated to preserve its clean white colour and mild sweet taste. Widely preferred in European and American food processing.',
      specs: [
        { label: 'Form', value: 'Chopped (3–5 mm)' },
        { label: 'Moisture', value: '≤ 5%' },
        { label: 'Colour', value: 'Bright White-Cream' },
        { label: 'Pungency', value: 'Mild' },
        { label: 'Shelf Life', value: '24 months' },
        { label: 'Packaging', value: '25 kg PP Bags / Custom' },
      ],
      uses: ['Pizza & Pasta', 'Light Curries', 'Burger Fillings', 'Spice Blends'],
    },
  },
  {
    id: 'white-onion-flakes',
    name: 'White Onion — Flakes',
    image: whiteOnionFlakes,
    badge: 'Premium',
    shortDesc: 'Crispy white onion flakes with a clean flavour — excellent for toppings and neutral blends.',
    details: {
      overview: 'White Onion Flakes are carefully dehydrated from top-quality white onions to produce clean, crispy flakes with a subtly sweet taste. Popular in light-coloured seasoning mixes and international snack brands.',
      specs: [
        { label: 'Form', value: 'Flakes (5–8 mm)' },
        { label: 'Moisture', value: '≤ 5%' },
        { label: 'Colour', value: 'Ivory-White Beige' },
        { label: 'Texture', value: 'Crispy & Uniform' },
        { label: 'Shelf Life', value: '24 months' },
        { label: 'Packaging', value: '25 kg PP Bags / Custom' },
      ],
      uses: ['Seasoning Mixes', 'Bread Toppings', 'Potato Chips', 'Instant Soups'],
    },
  },
  {
    id: 'white-onion-powder',
    name: 'White Onion — Powder',
    image: whiteOnionPowder,
    badge: 'Global Export',
    shortDesc: 'Fine free-flowing white onion powder — a staple in global spice blends and food factories.',
    details: {
      overview: 'Our White Onion Powder is finely milled from premium dehydrated white onions. Its neutral colour and mild-sweet flavour make it the most versatile onion powder for food manufacturers worldwide.',
      specs: [
        { label: 'Form', value: 'Powder (60–80 Mesh)' },
        { label: 'Moisture', value: '≤ 4%' },
        { label: 'Colour', value: 'Off-White / Ivory' },
        { label: 'Granulometry', value: '60–80 Mesh' },
        { label: 'Shelf Life', value: '24 months' },
        { label: 'Packaging', value: '25 kg PP Bags / Custom' },
      ],
      uses: ['Spice Blends', 'Dressings & Dips', 'Snack Seasonings', 'Dry Rubs'],
    },
  },
];

const spiceProducts = [
  {
    id: 'coriander',
    name: 'Coriander Powder',
    image: corianderPowder,
    badge: 'Aromatic',
    shortDesc: 'Freshly ground coriander with a citrusy-sweet aroma, essential for global cuisines.',
    details: {
      overview: 'Our Coriander Powder is freshly ground from select coriander seeds, capturing the warm citrusy notes that make it a cornerstone spice in Indian, Middle Eastern, and Latin American cooking.',
      specs: [
        { label: 'Form', value: 'Fine Powder' },
        { label: 'Moisture', value: '≤ 10%' },
        { label: 'Colour', value: 'Warm Golden Brown' },
        { label: 'Aroma', value: 'Citrusy & Sweet' },
        { label: 'Shelf Life', value: '18 months' },
        { label: 'Packaging', value: '25 kg PP Bags / Custom' },
      ],
      uses: ['Curries', 'Marinades', 'Spice Blends', 'Soups & Stews'],
    },
  },
  {
    id: 'cumin',
    name: 'Cumin Powder',
    image: cuminPowder,
    badge: 'Earthy Warmth',
    shortDesc: 'Earthy and warm cumin powder — essential for savory dishes and global spice blends.',
    details: {
      overview: 'Agrovia\'s Cumin Powder is ground from premium quality cumin seeds, offering a warm earthy flavor profile used extensively in Indian, Mexican, and Middle Eastern cuisines.',
      specs: [
        { label: 'Form', value: 'Fine Powder' },
        { label: 'Moisture', value: '≤ 10%' },
        { label: 'Colour', value: 'Deep Brown' },
        { label: 'Aroma', value: 'Earthy & Warm' },
        { label: 'Shelf Life', value: '18 months' },
        { label: 'Packaging', value: '25 kg PP Bags / Custom' },
      ],
      uses: ['Dal & Curries', 'Taco Seasoning', 'Spice Rubs', 'Hummus'],
    },
  },
  {
    id: 'turmeric',
    name: 'Turmeric Powder',
    image: turmericPowder,
    badge: 'High Curcumin',
    shortDesc: 'Vibrant golden turmeric with high curcumin content — prized for flavor and wellness.',
    details: {
      overview: 'Our Turmeric Powder is sourced from premium turmeric rhizomes with naturally high curcumin content (3–5%). A golden staple for food, nutraceuticals, and cosmetics industries globally.',
      specs: [
        { label: 'Form', value: 'Fine Powder' },
        { label: 'Curcumin', value: '3–5%' },
        { label: 'Colour', value: 'Vibrant Golden Yellow' },
        { label: 'Moisture', value: '≤ 10%' },
        { label: 'Shelf Life', value: '24 months' },
        { label: 'Packaging', value: '25 kg PP Bags / Custom' },
      ],
      uses: ['Curries & Rice', 'Health Drinks', 'Cosmetics', 'Nutraceuticals'],
    },
  },
  {
    id: 'redchilli',
    name: 'Red Chilli Powder',
    image: redChilliPowder,
    badge: 'Extra Hot',
    shortDesc: 'Fiery red chilli powder available in multiple heat levels for every culinary need.',
    details: {
      overview: 'Our Red Chilli Powder is ground from carefully selected red chillies, offering vibrant color and customizable heat levels (mild, medium, hot, extra-hot) to suit diverse international markets.',
      specs: [
        { label: 'Form', value: 'Fine Powder' },
        { label: 'Heat Level', value: 'Mild to Extra Hot' },
        { label: 'Colour', value: 'Deep Vivid Red' },
        { label: 'Moisture', value: '≤ 10%' },
        { label: 'Shelf Life', value: '18 months' },
        { label: 'Packaging', value: '25 kg PP Bags / Custom' },
      ],
      uses: ['Curries & Gravies', 'Hot Sauces', 'Meat Marinades', 'Snack Seasonings'],
    },
  },
];

const honeyProducts = [
  {
    id: 'natural-honey',
    name: 'Wild Forest Honey',
    image: naturalHoney,
    badge: 'Pure & Raw',
    shortDesc: 'Pure raw wild forest honey — rich in antioxidants with no added sugar or preservatives.',
    details: {
      overview: 'Agrovia\'s Wild Forest Honey is sourced directly from trusted beekeepers and is minimally processed to retain natural enzymes, antioxidants, and nutrients. No artificial additives — pure nature in a jar.',
      specs: [
        { label: 'Type', value: 'Pure Raw Honey' },
        { label: 'Moisture', value: '≤ 17%' },
        { label: 'Colour', value: 'Golden Amber' },
        { label: 'HMF', value: '< 40 mg/kg' },
        { label: 'Shelf Life', value: '24 months' },
        { label: 'Packaging', value: '500g / 1kg / Bulk' },
      ],
      uses: ['Health & Wellness', 'Bakery', 'Beverages', 'Natural Sweetener'],
    },
  },
  {
    id: 'jeera-honey',
    name: 'Raw Ajwain Honey',
    image: jeeraHoney,
    badge: 'Digestive Aid',
    shortDesc: 'Pure honey infused with raw ajwain — aids digestion with a warm, earthy sweetness.',
    details: {
      overview: 'Raw Ajwain Honey blends the natural goodness of pure honey with the digestive benefits of raw ajwain (carom seeds). A unique health product gaining popularity in wellness and nutraceutical markets worldwide.',
      specs: [
        { label: 'Type', value: 'Infused Honey' },
        { label: 'Moisture', value: '≤ 17%' },
        { label: 'Colour', value: 'Warm Amber with Seeds' },
        { label: 'Infusion', value: 'Ajwain (Carom) Extract' },
        { label: 'Shelf Life', value: '18 months' },
        { label: 'Packaging', value: '250g / 500g / 1kg' },
      ],
      uses: ['Digestive Health', 'Morning Rituals', 'Herbal Teas', 'Wellness Products'],
    },
  },
  {
    id: 'dry-fruits-honey',
    name: 'Dry Fruits Honey',
    image: dryFruitsHoney,
    badge: 'Nutrition Rich',
    shortDesc: 'Premium honey enriched with almonds, cashews & raisins — a powerhouse of nutrition.',
    details: {
      overview: 'A luxurious blend of pure wild forest honey with a handpicked selection of premium dry fruits including almonds, cashews, and raisins. Perfect for gifting, wellness, and premium food retail.',
      specs: [
        { label: 'Type', value: 'Enriched Honey' },
        { label: 'Moisture', value: '≤ 17%' },
        { label: 'Colour', value: 'Dark Amber' },
        { label: 'Dry Fruits', value: 'Almonds, Cashews, Raisins' },
        { label: 'Shelf Life', value: '18 months' },
        { label: 'Packaging', value: '250g / 500g / 1kg Gift Packs' },
      ],
      uses: ['Premium Gifting', 'Health Snacks', 'Breakfast Spread', 'Wellness Retail'],
    },
  },
];

// ── Sub-category tabs for dehydrated section ─────────────────────────────────
const dehydratedSubTabs = [
  { key: 'garlic', label: 'Garlic' },
  { key: 'onion',  label: 'Onion'  },
];

// ── Onion type tabs ───────────────────────────────────────────────────────────
const onionTypeTabs = [
  { key: 'pink',  label: 'Pink Onion',  color: '#c2185b' },
  { key: 'white', label: 'White Onion', color: '#546e7a' },
];

// ── Badge color map ───────────────────────────────────────────────────────────
const badgeColors = {
  'Best Seller':  '#2e7d32',
  'Export Grade': '#1565c0',
  'Premium':      '#6a1b9a',
  'Global Export':'#00796b',
  'Aromatic':     '#e65100',
  'Earthy Warmth':'#4e342e',
  'High Curcumin':'#f57f17',
  'Extra Hot':    '#b71c1c',
  'Pure & Raw':   '#558b2f',
  'Digestive Aid':'#2e7d32',
  'Nutrition Rich':'#5d4037',
};

// ── Modal Component ───────────────────────────────────────────────────────────
const ProductModal = ({ product, onClose }) => {
  if (!product) return null;
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-box" onClick={e => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}><X size={22} /></button>
        <div className="modal-layout">
          {/* Image */}
          <div className="modal-img-wrap">
            <img src={product.image} alt={product.name} className="modal-img" />
          </div>
          {/* Info */}
          <div className="modal-info">
            <h3 className="modal-title">{product.name}</h3>
            <p className="modal-overview">{product.details.overview}</p>

            {/* Specs */}
            <div className="modal-specs-grid">
              {product.details.specs.map((s, i) => (
                <div key={i} className="modal-spec-item">
                  <span className="spec-label">{s.label}</span>
                  <span className="spec-value">{s.value}</span>
                </div>
              ))}
            </div>

            {/* Uses */}
            <div className="modal-uses">
              <h4><Globe size={16} /> Applications</h4>
              <div className="uses-tags">
                {product.details.uses.map((u, i) => (
                  <span key={i} className="use-tag">{u}</span>
                ))}
              </div>
            </div>

            <a href="#contact" className="modal-cta" onClick={onClose}>
              Request a Quote <ArrowRight size={18} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

// ── Spec helper ───────────────────────────────────────────────────────────────
const specVal = (specs, label) => specs.find(s => s.label === label)?.value || '—';

// ── Product Card ──────────────────────────────────────────────────────────────
const ProductCard = ({ product, onOpen }) => (
  <div className="pcard" onClick={() => onOpen(product)}>
    <div className="pcard-img-wrap">
      <img src={product.image} alt={product.name} className="pcard-img" />
    </div>
    <div className="pcard-body">
      <h3 className="pcard-name">{product.name}</h3>
      <p className="pcard-desc">{product.shortDesc}</p>
      <div className="pcard-specs">
        <div className="pspec">
          <span className="pspec-k">Form</span>
          <span className="pspec-v">{specVal(product.details.specs, 'Form')}</span>
        </div>
        <div className="pspec-divider" />
        <div className="pspec">
          <span className="pspec-k">Shelf Life</span>
          <span className="pspec-v">{specVal(product.details.specs, 'Shelf Life')}</span>
        </div>
        <div className="pspec-divider" />
        <div className="pspec">
          <span className="pspec-k">Moisture</span>
          <span className="pspec-v">{specVal(product.details.specs, 'Moisture')}</span>
        </div>
      </div>
      <button className="pcard-btn">
        View Details <ChevronRight size={16} />
      </button>
    </div>
  </div>
);

// ── Main Component ────────────────────────────────────────────────────────────
const Products = () => {
  const [activeTab,    setActiveTab]    = useState('dehydrated');
  const [dehydSub,     setDehydSub]     = useState('garlic');
  const [onionType,    setOnionType]    = useState('pink');
  const [modalProduct, setModalProduct] = useState(null);

  const getProducts = () => {
    if (activeTab === 'dehydrated') {
      if (dehydSub === 'garlic') return garlicProducts;
      return onionType === 'pink' ? pinkOnionProducts : whiteOnionProducts;
    }
    if (activeTab === 'spices') return spiceProducts;
    return honeyProducts;
  };

  return (
    <section id="products" className="products-section section-padding">
      <div className="container">

        {/* Header */}
        <div className="prod-header text-center">
          <span className="prod-eyebrow">What We Export</span>
          <h2 className="section-title">Our Premium Product Range</h2>
          <p className="section-subtitle">
            Meticulously processed dehydrated vegetables, authentic ground spices, and pure natural
            honey — certified for global export with uncompromising quality.
          </p>
        </div>

        {/* ── Category Selector Cards ─────────────────────────────── */}
        <div className="cat-selector">
          <button id="tab-dehydrated"
            className={`cat-card ${activeTab === 'dehydrated' ? 'active' : ''}`}
            onClick={() => setActiveTab('dehydrated')}>
            <div className="cat-icon-wrap"><Leaf size={26} /></div>
            <div className="cat-text">
              <span className="cat-super">Dehydrated</span>
              <span className="cat-name">Onion &amp; Garlic</span>
              <span className="cat-count">8 Variants</span>
            </div>
            <ChevronRight size={18} className="cat-chevron" />
          </button>

          <button id="tab-spices"
            className={`cat-card ${activeTab === 'spices' ? 'active' : ''}`}
            onClick={() => setActiveTab('spices')}>
            <div className="cat-icon-wrap"><Flame size={26} /></div>
            <div className="cat-text">
              <span className="cat-super">Premium</span>
              <span className="cat-name">Ground Spices</span>
              <span className="cat-count">4 Variants</span>
            </div>
            <ChevronRight size={18} className="cat-chevron" />
          </button>

          <button id="tab-honey"
            className={`cat-card ${activeTab === 'honey' ? 'active' : ''}`}
            onClick={() => setActiveTab('honey')}>
            <div className="cat-icon-wrap"><Droplets size={26} /></div>
            <div className="cat-text">
              <span className="cat-super">Natural</span>
              <span className="cat-name">Honey Range</span>
              <span className="cat-count">3 Variants</span>
            </div>
            <ChevronRight size={18} className="cat-chevron" />
          </button>
        </div>

        {/* ── Sub-Navigation Breadcrumb Bar ───────────────────────── */}
        {activeTab === 'dehydrated' && (
          <div className="subnav-bar">
            <div className="subnav-left">
              <span className="subnav-label">Category</span>
              <span className="subnav-sep">›</span>
              <div className="subnav-pills">
                {dehydratedSubTabs.map(sub => (
                  <button key={sub.key} id={`subtab-${sub.key}`}
                    className={`subnav-pill ${dehydSub === sub.key ? 'active' : ''}`}
                    onClick={() => setDehydSub(sub.key)}>
                    {sub.label}
                  </button>
                ))}
              </div>
              {dehydSub === 'onion' && (
                <>
                  <span className="subnav-sep">›</span>
                  <div className="subnav-pills">
                    {onionTypeTabs.map(ot => (
                      <button key={ot.key} id={`oniontype-${ot.key}`}
                        className={`onion-type-pill ${onionType === ot.key ? 'active' : ''}`}
                        style={{ '--ot-color': ot.color }}
                        onClick={() => setOnionType(ot.key)}>
                        {ot.label}
                      </button>
                    ))}
                  </div>
                </>
              )}
            </div>
            <span className="subnav-count">{getProducts().length} products</span>
          </div>
        )}

        {/* ── Products Grid ───────────────────────────────────────── */}
        <div className="products-grid">
          {getProducts().map(product => (
            <ProductCard key={product.id} product={product} onOpen={setModalProduct} />
          ))}
        </div>

        {/* Trust Bar */}
        <div className="trust-bar">
          <div className="trust-item"><Star size={18} /><span>ISO Certified Processing</span></div>
          <div className="trust-item"><Package size={18} /><span>Custom Packaging Available</span></div>
          <div className="trust-item"><Thermometer size={18} /><span>Cold-Chain Ready</span></div>
          <div className="trust-item"><Globe size={18} /><span>Exported to 20+ Countries</span></div>
        </div>
      </div>

      {/* Modal */}
      <ProductModal product={modalProduct} onClose={() => setModalProduct(null)} />
    </section>
  );
};

export default Products;
