import React, { useState } from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Heart, BookOpen, Users, Globe, DollarSign } from 'lucide-react';

const Donate = () => {
  const [selectedAmount, setSelectedAmount] = useState(50);
  const [customAmount, setCustomAmount] = useState('');
  const [donationType, setDonationType] = useState('one-time');

  const predefinedAmounts = [25, 50, 100, 250, 500];

  const impactItems = [
    {
      icon: <BookOpen className="w-8 h-8 text-gold" />,
      title: 'School Supplies',
      description: '$25 provides essential school supplies for one student for a month',
      amount: 25
    },
    {
      icon: <Globe className="w-8 h-8 text-gold" />,
      title: 'Internet Access',
      description: '$50 covers internet costs for virtual learning for one student',
      amount: 50
    },
    {
      icon: <Users className="w-8 h-8 text-gold" />,
      title: 'Teacher Stipend',
      description: '$100 supports a teacher\'s monthly stipend in Afghanistan',
      amount: 100
    },
    {
      icon: <Heart className="w-8 h-8 text-gold" />,
      title: 'Full Student Support',
      description: '$250 provides comprehensive support for one student for a semester',
      amount: 250
    }
  ];

  const handleDonate = () => {
    // Redirect to your Zeffy donation form
    window.location.href = "https://www.zeffy.com/donation-form/donate-to-make-a-difference-8491";
  };

  return (
    <>
      <Helmet>
        <title>Donate - The School of Freedom</title>
        <meta name="description" content="Support Afghan girls' education by donating to The School of Freedom. Your contribution provides school supplies, internet access, and teacher support." />
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
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">Make a Difference</h1>
            <p className="text-xl md:text-2xl">
              Your donation directly impacts the lives of Afghan girls and refugee youth, 
              providing them with the education and opportunities they deserve.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Impact Section */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div 
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Your Impact</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Every dollar you donate goes directly to supporting our students and programs. 
              See how your contribution makes a real difference.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
            {impactItems.map((item, index) => (
              <motion.div
                key={index}
                className="card p-6 text-center cursor-pointer hover:shadow-xl transition-all duration-300"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                onClick={() => {
                  setSelectedAmount(item.amount);
                  setCustomAmount('');
                }}
              >
                <div className="flex justify-center mb-4">
                  {item.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy mb-3">{item.title}</h3>
                <p className="text-gray-600 mb-4">{item.description}</p>
                <div className="text-2xl font-bold text-gold">${item.amount}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Donation Form */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto">
            <motion.div 
              className="card p-8"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-navy text-center mb-8">Choose Your Donation</h2>
              
              {/* Donation Type */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-navy mb-4">Donation Type</h3>
                <div className="flex space-x-4">
                  <button
                    className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                      donationType === 'one-time' 
                        ? 'bg-navy text-white' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                    onClick={() => setDonationType('one-time')}
                  >
                    One-Time
                  </button>
                  <button
                    className={`flex-1 py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                      donationType === 'monthly' 
                        ? 'bg-navy text-white' 
                        : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                    }`}
                    onClick={() => setDonationType('monthly')}
                  >
                    Monthly
                  </button>
                </div>
              </div>

              {/* Amount Selection */}
              <div className="mb-8">
                <h3 className="text-lg font-semibold text-navy mb-4">Select Amount</h3>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-3 mb-4">
                  {predefinedAmounts.map((amount) => (
                    <button
                      key={amount}
                      className={`py-3 px-4 rounded-lg font-medium transition-all duration-300 ${
                        selectedAmount === amount && !customAmount
                          ? 'bg-gold text-navy border-2 border-gold' 
                          : 'bg-gray-200 text-gray-700 hover:bg-gray-300 border-2 border-transparent'
                      }`}
                      onClick={() => {
                        setSelectedAmount(amount);
                        setCustomAmount('');
                      }}
                    >
                      ${amount}
                    </button>
                  ))}
                </div>
                
                <div className="relative">
                  <DollarSign className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                  <input
                    type="number"
                    placeholder="Custom amount"
                    className="form-input pl-10"
                    value={customAmount}
                    onChange={(e) => {
                      setCustomAmount(e.target.value);
                      setSelectedAmount(0);
                    }}
                  />
                </div>
              </div>

              {/* Donation Button */}
              <button
                onClick={handleDonate}
                className="w-full btn-primary text-lg py-4 flex items-center justify-center space-x-2"
              >
                <Heart size={20} />
                <span>
                  Donate ${customAmount || selectedAmount} {donationType === 'monthly' ? '/month' : ''}
                </span>
              </button>

              <p className="text-center text-gray-600 mt-4 text-sm">
                Your donation is secure and goes directly to supporting our educational programs.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Donate;
