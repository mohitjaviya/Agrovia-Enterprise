import React, { useState } from 'react';
import { Calendar, User, ArrowRight, X } from 'lucide-react';
import './Blogs.css';

const blogs = [
  {
    title: 'The Health Benefits of Dehydrated Garlic',
    date: 'May 12, 2026',
    author: 'Agrovia Team',
    desc: 'Discover why dehydrated garlic retains its nutritional value and how it benefits your daily diet.',
    image: 'https://images.unsplash.com/photo-1540420773420-3366772f4999?auto=format&fit=crop&q=80&w=800',
    content: `<p>Dehydrated garlic is one of nature's most potent superfoods. The dehydration process removes moisture while preserving the essential compounds — allicin, sulfur compounds, and antioxidants — that make garlic a medicinal powerhouse.</p>
      <h3>Key Nutritional Benefits</h3>
      <ul>
        <li><strong>Rich in Allicin:</strong> The primary active compound responsible for antibacterial and antifungal properties.</li>
        <li><strong>Antioxidant-Rich:</strong> Helps fight oxidative stress and reduce inflammation in the body.</li>
        <li><strong>Heart Health:</strong> Linked to lower blood pressure and improved cholesterol levels.</li>
        <li><strong>Immune Booster:</strong> Strengthens the immune system against colds and infections.</li>
      </ul>
      <h3>Why Choose Dehydrated Over Fresh?</h3>
      <p>Dehydrated garlic offers a significantly longer shelf life (up to 3 years), is easier to store, and provides consistent flavor intensity. It is ideal for food manufacturers who need reliable ingredient quality at scale.</p>
      <h3>Agrovia's Dehydrated Garlic Range</h3>
      <p>At Agrovia Enterprise, we offer dehydrated garlic in flakes, minced, granules, and powder forms — all processed using state-of-the-art dehydration technology to preserve maximum nutritional value and flavor.</p>`
  },
  {
    title: 'Global Spice Market Trends for 2026',
    date: 'April 28, 2026',
    author: 'Market Research',
    desc: 'An overview of the rising demand for authentic Indian spices in international culinary markets.',
    image: 'https://images.unsplash.com/photo-1596040033229-a9821ebd058d?auto=format&fit=crop&q=80&w=800',
    content: `<p>The global spice market is projected to reach $21.4 billion by 2026, driven by increasing consumer preference for authentic, ethnic flavors and growing demand for natural food additives in processed food manufacturing.</p>
      <h3>Key Market Drivers</h3>
      <ul>
        <li><strong>Rise of Global Cuisines:</strong> Western consumers are exploring Indian, Middle Eastern, and Asian cuisines, driving demand for authentic spices.</li>
        <li><strong>Clean Label Movement:</strong> Food manufacturers are replacing artificial flavors with natural spice extracts.</li>
        <li><strong>Health & Wellness Trend:</strong> Spices like turmeric (curcumin) are consumed for anti-inflammatory properties.</li>
        <li><strong>E-Commerce Growth:</strong> Online spice retail has grown by 35% year-over-year.</li>
      </ul>
      <h3>India's Position in the Global Market</h3>
      <p>India remains the world's largest producer and exporter of spices, accounting for over 75% of global spice production. Gujarat is a leading hub for cumin, coriander, and fennel exports.</p>
      <h3>Opportunities for Agrovia</h3>
      <p>With our Gujarat-based processing facility and direct farmer partnerships, Agrovia Enterprise is uniquely positioned to deliver consistent, premium-quality spices to global buyers.</p>`
  },
  {
    title: 'Farm to Table: Our Sustainable Supply Chain',
    date: 'April 15, 2026',
    author: 'Agrovia Team',
    desc: 'Learn about our rigorous sourcing methods that ensure top-tier quality and support local farmers.',
    image: 'https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&q=80&w=800',
    content: `<p>At Agrovia Enterprise, sustainability is not just a buzzword — it's the foundation of how we operate. Our farm-to-table approach ensures that every product we export has been responsibly sourced, carefully processed, and reliably delivered.</p>
      <h3>Step 1: Direct Farmer Partnerships</h3>
      <p>We work directly with over 200 farming families across Gujarat and Rajasthan. By eliminating middlemen, farmers receive fair prices while we maintain full visibility over growing conditions and pesticide usage.</p>
      <h3>Step 2: Rigorous Quality Checks at Source</h3>
      <p>Our field agents inspect crops before harvest, checking for moisture levels, pest damage, and chemical residues. Only crops meeting our standards enter our supply chain.</p>
      <h3>Step 3: State-of-the-Art Processing</h3>
      <p>Our processing facility uses low-temperature dehydration to preserve nutrients, color, and aroma. All equipment is food-grade stainless steel, sanitized between every production batch.</p>
      <h3>Step 4: Packaging & Export</h3>
      <p>Products are packed in food-safe, moisture-resistant packaging with full traceability codes. We comply with FSSAI, ISO 22000, and HACCP international food safety standards.</p>`
  }
];

const Blogs = () => {
  const [activeBlog, setActiveBlog] = useState(null);

  return (
    <section id="blogs" className="section-padding blogs-section">
      <div className="container">
        <div className="text-center">
          <h2 className="section-title">Latest Insights</h2>
          <p className="section-subtitle">
            Stay updated with our latest news, market insights, and product updates.
          </p>
        </div>

        <div className="blogs-grid">
          {blogs.map((blog, index) => (
            <div key={index} className="blog-card">
              <div className="blog-image">
                <img src={blog.image} alt={blog.title} />
              </div>
              <div className="blog-content">
                <div className="blog-meta">
                  <span className="meta-item"><Calendar size={14} /> {blog.date}</span>
                  <span className="meta-item"><User size={14} /> {blog.author}</span>
                </div>
                <h3 className="blog-title">{blog.title}</h3>
                <p className="blog-desc">{blog.desc}</p>
                <button className="blog-link" onClick={() => setActiveBlog(blog)}>
                  Read More <ArrowRight size={16} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Blog Modal */}
      {activeBlog && (
        <div className="blog-modal-overlay" onClick={() => setActiveBlog(null)}>
          <div className="blog-modal" onClick={e => e.stopPropagation()}>
            <button className="blog-modal-close" onClick={() => setActiveBlog(null)}>
              <X size={24} />
            </button>
            <div className="blog-modal-hero">
              <img src={activeBlog.image} alt={activeBlog.title} />
            </div>
            <div className="blog-modal-body">
              <div className="blog-meta" style={{ marginBottom: '1.5rem' }}>
                <span className="meta-item"><Calendar size={14} /> {activeBlog.date}</span>
                <span className="meta-item"><User size={14} /> {activeBlog.author}</span>
              </div>
              <h2 className="blog-modal-title">{activeBlog.title}</h2>
              <div className="blog-modal-content" dangerouslySetInnerHTML={{ __html: activeBlog.content }} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Blogs;
