"use client"

import { ThemeProvider } from "@/providers/ThemeProvider";
import NavbarLayoutFloatingOverlay from '@/components/navbar/NavbarLayoutFloatingOverlay/NavbarLayoutFloatingOverlay';
import HeroBillboard from '@/components/sections/hero/HeroBillboard';
import FeatureCardTwo from '@/components/sections/feature/FeatureCardTwo';
import ProductCardTwo from '@/components/sections/product/ProductCardTwo';
import PricingCardThree from '@/components/sections/pricing/PricingCardThree';
import TestimonialCardTwo from '@/components/sections/testimonial/TestimonialCardTwo';
import SocialProofOne from '@/components/sections/socialProof/SocialProofOne';
import ContactCenter from '@/components/sections/contact/ContactCenter';
import FooterBase from '@/components/sections/footer/FooterBase';
import { Bell, Building2, CreditCard, DollarSign, MessageSquare, Shield, Smartphone, Sparkles, Star, TrendingUp, Truck } from "lucide-react";

export default function Home() {
  return (
    <ThemeProvider
      defaultButtonVariant="hover-magnetic"
      defaultTextAnimation="reveal-blur"
      borderRadius="rounded"
    >
      <div id="nav" data-section="nav">
        <NavbarLayoutFloatingOverlay
          navItems={[
            { name: "Features", id: "features" },
            { name: "Products", id: "products" },
            { name: "Pricing", id: "pricing" },
            { name: "Reviews", id: "testimonials" },
            { name: "Contact", id: "contact" }
          ]}
          brandName="ShopApp"
          button={{
            text: "Download App",
            href: "https://apps.apple.com"
          }}
        />
      </div>

      <div id="hero" data-section="hero">
        <HeroBillboard
          title="Shop iPhones with Confidence"
          description="Discover the latest iPhone models, compare prices, and find your perfect device with our intuitive shopping app."
          tag="New App"
          tagIcon={Smartphone}
          buttons={[
            {
              text: "Download Now",
              href: "https://apps.apple.com"
            },
            {
              text: "View Features",
              href: "features"
            }
          ]}
          imageSrc="https://images.pexels.com/photos/16675636/pexels-photo-16675636.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
        />
      </div>

      <div id="features" data-section="features">
        <FeatureCardTwo
          title="Why Choose Our iPhone Shopping App"
          description="Everything you need to make informed iPhone purchases"
          tag="Features"
          tagIcon={Star}
          features={[
            {
              title: "Price Comparison",
              description: "Compare prices across multiple retailers to find the best deals on every iPhone model.",
              icon: DollarSign
            },
            {
              title: "Authentic Reviews",
              description: "Read verified customer reviews and ratings to make confident purchasing decisions.",
              icon: MessageSquare
            },
            {
              title: "Secure Checkout",
              description: "Shop with confidence using our encrypted payment system and buyer protection.",
              icon: Shield
            },
            {
              title: "Fast Delivery",
              description: "Get your new iPhone delivered quickly with our network of trusted shipping partners.",
              icon: Truck
            }
          ]}
        />
      </div>

      <div id="products" data-section="products">
        <ProductCardTwo
          title="Featured iPhone Models"
          description="Discover the latest iPhone collection with competitive pricing"
          tag="Best Sellers"
          tagIcon={TrendingUp}
          products={[
            {
              id: "1",
              brand: "Apple",
              name: "iPhone 15 Pro Max",
              price: "$1,199.00",
              rating: 5,
              reviewCount: "12.4k",
              imageSrc: "https://images.pexels.com/photos/18525574/pexels-photo-18525574.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              brand: "Apple",
              name: "iPhone 15 Plus",
              price: "$899.00",
              rating: 5,
              reviewCount: "8.7k",
              imageSrc: "https://images.pexels.com/photos/16004978/pexels-photo-16004978.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              brand: "Apple",
              name: "iPhone 15",
              price: "$799.00",
              rating: 4,
              reviewCount: "15.2k",
              imageSrc: "https://images.pexels.com/photos/7505561/pexels-photo-7505561.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="pricing" data-section="pricing">
        <PricingCardThree
          title="Choose Your Shopping Plan"
          description="Select the plan that fits your iPhone shopping needs"
          tag="Plans"
          tagIcon={CreditCard}
          plans={[
            {
              id: "basic",
              price: "Free",
              name: "Basic Plan",
              buttons: [
                {
                  text: "Get Started",
                  href: "https://apps.apple.com"
                },
                {
                  text: "Learn More",
                  href: "features"
                }
              ],
              features: [
                "Price comparison across 5+ retailers",
                "Basic product reviews",
                "Standard customer support",
                "Weekly deals notifications"
              ]
            },
            {
              id: "premium",
              badge: "Most Popular",
              badgeIcon: Sparkles,
              price: "$9.99/month",
              name: "Premium Plan",
              buttons: [
                {
                  text: "Start Premium",
                  href: "https://apps.apple.com"
                },
                {
                  text: "Contact Sales",
                  href: "contact"
                }
              ],
              features: [
                "Price comparison across 20+ retailers",
                "Advanced analytics and insights",
                "Priority customer support",
                "Daily deals and exclusive offers",
                "Extended warranty tracking",
                "Trade-in value calculator"
              ]
            }
          ]}
        />
      </div>

      <div id="testimonials" data-section="testimonials">
        <TestimonialCardTwo
          title="What Our Users Say"
          description="Join thousands of satisfied iPhone shoppers"
          tag="Reviews"
          tagIcon={MessageSquare}
          testimonials={[
            {
              id: "1",
              name: "Sarah Johnson",
              role: "Tech Enthusiast",
              testimonial: "This app saved me over $200 on my iPhone 15 Pro Max purchase. The price comparison feature is incredible and the checkout process was seamless.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "2",
              name: "Michael Chen",
              role: "Small Business Owner",
              testimonial: "Finally, an app that makes iPhone shopping simple. I found the perfect device for my business needs and got it delivered in just 2 days.",
              imageSrc: "https://images.pexels.com/photos/6333673/pexels-photo-6333673.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "3",
              name: "Emily Rodriguez",
              role: "College Student",
              testimonial: "The student discounts and deals section helped me afford my first iPhone. The app interface is intuitive and customer service is top-notch.",
              imageSrc: "https://images.pexels.com/photos/789822/pexels-photo-789822.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            },
            {
              id: "4",
              name: "David Kim",
              role: "Software Engineer",
              testimonial: "Love the detailed specs comparison and authentic reviews. Made switching from Android to iPhone an informed decision rather than a gamble.",
              imageSrc: "https://images.pexels.com/photos/7109087/pexels-photo-7109087.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
            }
          ]}
        />
      </div>

      <div id="social-proof" data-section="social-proof">
        <SocialProofOne
          title="Trusted by Leading Companies"
          description="Join enterprise customers who trust our platform for their mobile device procurement"
          tag="Partners"
          tagIcon={Building2}
          logos={[
            "https://images.pexels.com/photos/9949426/pexels-photo-9949426.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/10142683/pexels-photo-10142683.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/9949424/pexels-photo-9949424.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/267399/pexels-photo-267399.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/2449452/pexels-photo-2449452.jpeg?auto=compress&cs=tinysrgb&h=650&w=940",
            "https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
          ]}
        />
      </div>

      <div id="contact" data-section="contact">
        <ContactCenter
          tag="Stay Updated"
          tagIcon={Bell}
          title="Get iPhone Deals & News"
          description="Subscribe to receive exclusive iPhone deals, new model announcements, and app updates delivered to your inbox."
          inputPlaceholder="Enter your email address"
          buttonText="Subscribe"
          termsText="By subscribing, you agree to receive promotional emails. Unsubscribe anytime with one click."
        />
      </div>

      <div id="footer" data-section="footer">
        <FooterBase
          columns={[
            {
              title: "Product",
              items: [
                { label: "Features", href: "features" },
                { label: "iPhone Models", href: "products" },
                { label: "Pricing", href: "pricing" },
                { label: "Download App", href: "https://apps.apple.com" }
              ]
            },
            {
              title: "Support",
              items: [
                { label: "Help Center", href: "faq" },
                { label: "Contact Us", href: "contact" },
                { label: "Order Status", href: "https://support.shopapp.com" },
                { label: "Returns", href: "https://support.shopapp.com/returns" }
              ]
            },
            {
              title: "Company",
              items: [
                { label: "About Us", href: "about" },
                { label: "Careers", href: "https://careers.shopapp.com" },
                { label: "Press", href: "https://press.shopapp.com" },
                { label: "Blog", href: "https://blog.shopapp.com" }
              ]
            }
          ]}
          copyrightText="© 2025 | ShopApp"
        />
      </div>
    </ThemeProvider>
  );
}