
import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { FileText, Users, Heart, CheckCircle } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Petition = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    state: '',
    zipCode: '',
    comments: ''
  });
  const { toast } = useToast();

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast({
      title: '🚧 Petition Submission Coming Soon!',
      description: 'Petition processing isn\'t implemented yet—but don\'t worry! You can request Google Forms or Change.org integration in your next prompt! 🚀',
      duration: 5000,
    });
  };

  const petitionPoints = [
    'Support the establishment of a dual-immersion charter school in Sacramento',
    'Provide language support and identity-affirming education for refugee students',
    'Create long-term academic opportunities for newcomer communities',
    'Ensure culturally inclusive educational environments',
    'Advocate for educational equity and access for all students'
  ];

  return (
    <>
      <Helmet>
        <title>Sign the Petition - The School of Freedom</title>
        <meta name="description" content="Sign our petition to support the launch of a dual-immersion charter school in Sacramento for refugee and newcomer communities." />
      </Helmet>

      {/* Hero Section */}
      <section className="py-20 hero-gradient text-white">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">Sign the Petition</h1>
            <p className="text-xl md:text-2xl">
              Help us launch a transformative dual-immersion charter school in Sacramento 
              to serve refugee and newcomer communities.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Petition Details */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-16">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="section-title mb-6">Why This School Matters</h2>
              <div className="space-y-6 text-lg text-gray-700">
                <p>
                  We are in the process of launching a groundbreaking dual-immersion charter school 
                  in Sacramento that will serve refugee and newcomer communities with specialized 
                  support and culturally affirming education.
                </p>
                <p>
                  This school will provide language support, identity-affirming education, and 
                  long-term academic opportunities for students who have faced displacement and 
                  educational disruption.
                </p>
                <p>
                  Your signature helps demonstrate community support for this vital educational 
                  initiative that will transform lives and strengthen our community.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <img  
                className="w-full h-96 object-cover rounded-lg shadow-lg" 
                alt="Diverse group of refugee students in Sacramento classroom"
               src="https://ichef.bbci.co.uk/news/976/cpsprodpb/13F35/production/_117571718_066075196-1.jpg" />
            </motion.div>
          </div>

          {/* Petition Points */}
          <motion.div 
            className="bg-light-gray rounded-lg p-8 mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-semibold text-navy mb-6 text-center">What We're Advocating For</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {petitionPoints.map((point, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <CheckCircle className="w-6 h-6 text-gold mt-1 flex-shrink-0" />
                  <p className="text-gray-700">{point}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Petition Form */}
      <section className="py-16 bg-navy text-white" id='petition'>
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div 
              className="text-center mb-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold font-display mb-4">Add Your Voice</h2>
              <p className="text-xl">
                Join thousands of supporters advocating for educational equity and opportunity.
              </p>
            </motion.div>

            <motion.form 
              onSubmit={handleSubmit}
              className="bg-white rounded-lg p-8 text-gray-700"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    required
                    className="form-input"
                    value={formData.firstName}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    required
                    className="form-input"
                    value={formData.lastName}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  required
                  className="form-input"
                  value={formData.email}
                  onChange={handleInputChange}
                />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    City
                  </label>
                  <input
                    type="text"
                    name="city"
                    className="form-input"
                    value={formData.city}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    State
                  </label>
                  <input
                    type="text"
                    name="state"
                    className="form-input"
                    value={formData.state}
                    onChange={handleInputChange}
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Zip Code
                  </label>
                  <input
                    type="text"
                    name="zipCode"
                    className="form-input"
                    value={formData.zipCode}
                    onChange={handleInputChange}
                  />
                </div>
              </div>

              <div className="mb-6">
                <label className="block text-sm font-medium text-gray-700 mb-2">
                  Comments (Optional)
                </label>
                <textarea
                  name="comments"
                  className="form-textarea"
                  placeholder="Share why this cause matters to you..."
                  value={formData.comments}
                  onChange={handleInputChange}
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full bg-gold text-navy py-4 rounded-lg font-semibold text-lg hover:bg-opacity-90 transition-all duration-300 flex items-center justify-center space-x-2"
              >
                <FileText size={20} />
                <span>Sign the Petition</span>
              </button>

              <p className="text-center text-gray-600 mt-4 text-sm">
                By signing, you agree to receive updates about our charter school initiative.
              </p>
            </motion.form>
          </div>
        </div>
      </section>

      {/* Impact Stats */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Growing Support</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Our petition is gaining momentum with supporters from across the community.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              className="card p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="w-8 h-8 text-navy" />
              </div>
              <div className="stats-number">2,500+</div>
              <p className="text-lg font-medium text-gray-700">Signatures Collected</p>
            </motion.div>

            <motion.div
              className="card p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-8 h-8 text-navy" />
              </div>
              <div className="stats-number">15</div>
              <p className="text-lg font-medium text-gray-700">Community Partners</p>
            </motion.div>

            <motion.div
              className="card p-8 text-center"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="w-8 h-8 text-navy" />
              </div>
              <div className="stats-number">500+</div>
              <p className="text-lg font-medium text-gray-700">Students to Benefit</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-navy font-display mb-6">
              Every Signature Counts
            </h2>
            <p className="text-xl text-gray-600 mb-8">
              Your support helps us demonstrate the community need for this transformative 
              educational opportunity. Together, we can create a school that truly serves 
              our refugee and newcomer families.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className="btn-primary text-lg px-8 py-4"
              >
                Sign the Petition
              </button>
              <button 
                onClick={() => {
                  toast({
                    title: '🚧 Sharing Feature Coming Soon!',
                    description: 'Social sharing isn\'t available yet—but don\'t worry! You can request it in your next prompt! 🚀',
                    duration: 5000,
                  });
                }}
                className="bg-navy text-white px-8 py-4 rounded-lg font-medium hover:bg-opacity-90 transition-all duration-300"
              >
                Share with Friends
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Petition;
