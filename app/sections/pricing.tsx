"use client";

import React from 'react';
import { 
  ShoppingBag, 
  List, 
  ShieldCheck, 
  User, 
  Monitor, 
  CheckCircle2, 
  XCircle, 
  Briefcase ,
  FolderCode ,
} from 'lucide-react';
import './pricing.css';
import AnimatedSection from '../components/AnimatedSection';

export default function PricingSection ()  {
  return (
    <div className="pricing-wrapper" id="pricing">
      <div className="pricing-container">
        
        {/* Top Header */}
        <AnimatedSection className="pricing-header-wrap" delay={0}>
          <header className="pricing-header">
            <h2>Small Investment</h2>
            <h1>Performance and Efficiency at your Desktop</h1>
            
            <div className="trust-bar">
              <div className="trust-item"><ShoppingBag size={20}/> Lifetime Purchase</div>
              <div className="dot-separator"></div>
              <div className="trust-item"><List size={20}/> All Features</div>
              <div className="dot-separator"></div>
              <div className="trust-item"><ShieldCheck size={20}/> 30-days Money Back Guarantee</div>
            </div>
          </header>
        </AnimatedSection>

        {/* Pricing Cards */}
        <div className="pricing-grid">
          
          {/* Free Tier */}
          <AnimatedSection className="pricing-card-wrap" delay={0}>
          <div className="pricing-card">
            <div className="card-icon-box"><User size={22}/></div>
            <h3 className="card-name">Free</h3>
            <p className="card-subtitle">For daily users.</p>
            <p className="price-main">$0.00/month</p>
            <span className="price-strike">$0.00/month</span>
            <button className="card-btn">Activate Free Tier</button>
            <ul className="feature-list">
              <li className="feature-item"><Monitor size={16}/> 1 Devices</li>
              <li className="feature-item disabled"><XCircle size={16}/> No Access to pro feature</li>
              <li className="feature-item disabled"><XCircle size={16}/> No Perpetual license</li>
              <li className="feature-item"><CheckCircle2 size={16}/> 1 year of updates</li>
              <li className="feature-item"><CheckCircle2 size={16}/> Email support</li>
            </ul>
          </div>
          </AnimatedSection>

          {/* Personal Tier */}
          <AnimatedSection className="pricing-card-wrap" delay={80}>
          <div className="pricing-card">
            <div className="card-icon-box"><User size={22}/></div>
            <h3 className="card-name">Personal</h3>
            <p className="card-subtitle">For daily productivity.</p>
            <p className="price-main">$1.99/month</p>
            <span className="price-strike">$5.99/month</span>
            <button className="card-btn">Buy Personal License</button>
            <ul className="feature-list">
              <li className="feature-item"><Monitor size={16}/> 1 Devices</li>
              <li className="feature-item"><CheckCircle2 size={16}/> Unlock all pro features</li>
              <li className="feature-item"><CheckCircle2 size={16}/> Perpetual license</li>
              <li className="feature-item"><CheckCircle2 size={16}/> 1 year of updates</li>
              <li className="feature-item"><CheckCircle2 size={16}/> Email support</li>
            </ul>
          </div>
          </AnimatedSection>

          {/* Developer Tier (Highlighted) */}
          <AnimatedSection className="pricing-card-wrap" delay={160}>
          <div className="pricing-card highlighted">
            <div className="recommended-badge">Recommended</div>
            <div className="card-icon-box highlighted"><FolderCode  size={22}/></div>
            <h3 className="card-name">Developer</h3>
            <p className="card-subtitle">For power users.</p>
            <p className="price-main">$7.99/month</p>
            <span className="price-strike">$10.99/month</span>
            <button className="card-btn" style={{backgroundColor: '#260055'}}>Buy Developer License</button>
            <ul className="feature-list">
              <li className="feature-item"><Monitor size={16}/> 5 Devices</li>
              <li className="feature-item"><CheckCircle2 size={16}/> Unlock all pro features</li>
              <li className="feature-item"><CheckCircle2 size={16}/> Perpetual license</li>
              <li className="feature-item"><CheckCircle2 size={16}/> Lifetime of updates</li>
              <li className="feature-item"><CheckCircle2 size={16}/> Email support</li>
            </ul>
          </div>
          </AnimatedSection>

          {/* Enterprise Tier */}
          <AnimatedSection className="pricing-card-wrap" delay={240}>
          <div className="pricing-card">
            <div className="card-icon-box"><Briefcase size={22}/></div>
            <h3 className="card-name">Enterprise</h3>
            <p className="card-subtitle">For lifetime purchase.</p>
            <p className="price-main">$899.99</p>
            <span className="price-strike">$999.99</span>
            <button className="card-btn">Buy Developer License</button>
            <ul className="feature-list">
              <li className="feature-item"><Monitor size={16}/> 100 Devices</li>
              <li className="feature-item"><CheckCircle2 size={16}/> Unlock all pro features</li>
              <li className="feature-item"><CheckCircle2 size={16}/> Perpetual license</li>
              <li className="feature-item"><CheckCircle2 size={16}/> Lifetime of updates</li>
              <li className="feature-item"><CheckCircle2 size={16}/> Email support</li>
            </ul>
          </div>
          </AnimatedSection>

        </div>
      </div>
    </div>
  );
};
