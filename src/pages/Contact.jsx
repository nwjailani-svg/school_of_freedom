import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';

const Contact = () => {
  const { toast } = useToast();

  const contactInfo = [
    {
      icon: <Mail className="w-6 h-6 text-gold" />,
      title: 'Email Us',
      details: 'Admin@schooloffreedom.org',
      description: 'Send us a message anytime'
    },
    {
      icon: <Phone className="w-6 h-6 text-gold" />,
      title: 'Call Us',
      details: '(916) 844-5480',
      description: 'Monday - Friday, 9AM - 5PM PST'
    },
    {
      icon: <MapPin className="w-6 h-6 text-gold" />,
      title: 'Visit Us',
      details: 'Sacramento, CA',
      description: 'UC Davis Campus Area'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Contact Us - The School of Freedom</title>
        <meta
          name="description"
          content="Get in touch with The School of Freedom. Contact us for inquiries, partnerships, or to learn more about our educational programs."
        />
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
            <h1 className="text-5xl md:text-6xl font-bold font-display mb-6">Get in Touch</h1>
            <p className="text-xl md:text-2xl">
              We'd love to hear from you. Reach out with questions, partnership opportunities,
              or to learn more about our mission.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Information */}
      <section className="section-padding">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">How to Reach Us</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Whether you're interested in supporting our mission, partnering with us,
              or simply want to learn more, we're here to help.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {contactInfo.map((info, index) => (
              <motion.div
                key={index}
                className="card p-6 text-center"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex justify-center mb-4">{info.icon}</div>
                <h3 className="text-xl font-semibold text-navy mb-2">{info.title}</h3>
                <p className="text-lg font-medium text-gold mb-2">{info.details}</p>
                <p className="text-gray-600">{info.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ (Updated) */}
      <section className="py-16 bg-light-gray">
        <div className="container mx-auto px-4">
          <motion.div
            className="card p-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h3 className="text-3xl font-bold text-navy mb-6">Frequently Asked Questions (FAQ)</h3>
            <div className="space-y-6 text-gray-700">
              <div>
                <h4 className="font-semibold text-navy mb-2">1. What is the School of Freedom?</h4>
                <p>
                  The School of Freedom is a nonprofit organization dedicated to providing quality education
                  for Afghan girls in Afghanistan and refugee/newcomer youth in the United States. We focus on
                  academic tutoring, mentorship, college preparation, and leadership development.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-navy mb-2">2. Who can participate in your programs?</h4>
                <ul className="list-disc ml-6 space-y-1">
                  <li>Afghan girls currently denied access to education in Afghanistan</li>
                  <li>Refugee and newcomer students in the U.S.</li>
                  <li>Students in need of academic support and mentorship</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-navy mb-2">3. Are your programs free?</h4>
                <p>Yes. All of our educational programs, tutoring, and mentorship sessions are completely free for students.</p>
              </div>

              <div>
                <h4 className="font-semibold text-navy mb-2">4. How can I volunteer?</h4>
                <p>
                  We welcome high school students, college students, graduates, working professionals, and retirees as volunteers.
                  Opportunities include tutoring, mentorship, helping with college prep, and providing language support.
                  You can sign up on our Volunteer page.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-navy mb-2">5. Do I need teaching experience to volunteer?</h4>
                <p>No. While prior experience is helpful, we provide training and resources to ensure you can confidently support students.</p>
              </div>

              <div>
                <h4 className="font-semibold text-navy mb-2">6. Are sessions in-person or online?</h4>
                <p>
                  Most of our programs are online to make them accessible for students regardless of location.
                  Some local partnerships, like with school districts, may include in-person opportunities.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-navy mb-2">7. How can I donate?</h4>
                <p>
                  You can support our work by donating through our Donate page. Every contribution helps us provide educational
                  resources, internet access, and teacher support for our students.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-navy mb-2">8. Where do you operate?</h4>
                <ul className="list-disc ml-6 space-y-1">
                  <li><span className="font-medium">Internationally:</span> Supporting Afghan girls in Afghanistan through virtual education.</li>
                  <li><span className="font-medium">In the U.S.:</span> Supporting refugee and newcomer youth, especially in California.</li>
                </ul>
              </div>

              <div>
                <h4 className="font-semibold text-navy mb-2">9. What languages do you offer support in?</h4>
                <p>We provide educational support in English, Dari, Pashto, and other languages depending on volunteer availability.</p>
              </div>

              <div>
                <h4 className="font-semibold text-navy mb-2">10. How can I petition to support the School of Freedom Charter School?</h4>
                <p>
                  We are working to open the first-ever School of Freedom Charter School to serve refugee and newcomer students.
                  You can help make this a reality by signing our petition on the Charter School Petition page. Your signature
                  will show community support to local school boards and decision-makers, helping us secure approval and funding.
                </p>
              </div>

              <div>
                <h4 className="font-semibold text-navy mb-2">11. How can I contact the School of Freedom?</h4>
                <p>
                  You can reach us at <span className="font-medium">Admin@schooloffreedom.org</span> or by phone at
                  <span className="font-medium"> (916) 844-5480</span>. We’re also active on social media.
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="section-title">Our Location</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Based in the Sacramento area near UC Davis, we serve students globally
              through our virtual programs and locally through our refugee support initiatives.
            </p>
          </motion.div>

          <motion.div
            className="bg-light-gray rounded-lg p-8 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-navy" />
            </div>
            <h3 className="text-2xl font-semibold text-navy mb-4">Sacramento, California</h3>
            <p className="text-gray-600 mb-6">
              Our headquarters are located in the Sacramento area, where we coordinate
              our global virtual programs and local refugee support services.
            </p>
            <button
              className="btn-primary"
              onClick={() => {
                toast({
                  title: '🚧 Interactive Map Coming Soon!',
                  description:
                    "Map integration isn't available yet—but don't worry! You can request Google Maps integration next. 🚀",
                  duration: 5000
                });
              }}
            >
              View on Map
            </button>
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Contact;
