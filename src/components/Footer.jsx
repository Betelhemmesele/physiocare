import { FaTwitter, FaInstagram, FaLinkedin ,FaFacebookF,FaEnvelope} from 'react-icons/fa';
import { useEffect } from 'react';

const Footer = () => {
  // Load Facebook SDK
  useEffect(() => {
    window.fbAsyncInit = function () {
      window.FB.init({
        appId: 'YOUR_APP_ID', // Replace with your Facebook app ID
        xfbml: true,
        version: 'v12.0'
      });
    };

    (function (d, s, id) {
      var js, fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) return;
      js = d.createElement(s);
      js.id = id;
      js.src = "https://connect.facebook.net/en_US/sdk.js";
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }, []);

  return (
    <footer
      className="text-white py-12 bg-cover bg-center"
      style={{ backgroundImage: "url('https://www.sunline.org/sites/default/files/sunride-bluebg.jpg')" }}
    >
      <div className="container mx-auto max-w-9xl px-4 md:px-1">
        <div className="flex flex-col md:flex-row justify-between md:space-x-2 lg:space-x-12">
          {/* Brand Description */}
          <div className="mb-8 md:mb-0">
            <h2 className="text-2xl font-bold mb-4">PhysioDev NY</h2>
            <p className="text-white mb-4">
              At PhysioDev NY, we’re committed to compassionate, individualized care. Whether you’re recovering from an accident or managing chronic pain, we help you heal — and thrive.
            </p>
            <p className="italic text-blue-200">
              "Move freely. Live pain-free. Heal with purpose."
            </p>
          </div>
  
          {/* Quick Links */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li><a href="/" className="hover:text-blue-400 transition transform hover:scale-110 duration-200 inline-block">Home</a></li>
              <li><a href="/about-us" className="hover:text-blue-400 transition transform hover:scale-110 duration-200 inline-block">About Us</a></li>
              <li><a href="/services" className="hover:text-blue-400 transition transform hover:scale-110 duration-200 inline-block">Services</a></li>
              <li><a href="/testimonials" className="hover:text-blue-400 transition transform hover:scale-110 duration-200 inline-block">Testimonials</a></li>
              <li><a href="/contact-us" className="hover:text-blue-400 transition transform hover:scale-110 duration-200 inline-block">Contact Us</a></li>
            </ul>
          </div>
  
          {/* Contact Information */}
          <div className="mb-8 md:mb-0">
            <h3 className="text-xl font-semibold mb-4">Contact Information</h3>
            <ul className="space-y-3">
              <li><span className="font-semibold">Phone:</span> (516) 379-0000</li>
              <li><span className="font-semibold">Email:</span> info@physiodevny.com</li>
              <li><span className="font-semibold">Address:</span> 2270 Grand Ave, Baldwin, NY 11510</li>
            </ul>
          </div>
  
          {/* Social Media Links */}
          <div>
            <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
            <div className="flex justify-center md:justify-start space-x-6 lg:space-x-6 md:space-x-3">
              <a
                href="https://www.facebook.com/sharer/sharer.php?u=https://physiodevny.com"
                target="_blank"
                rel="noreferrer"
                aria-label="Share on Facebook"
                className="fb-share-button"
              >
                <FaFacebookF className="text-3xl md:text-2xl lg:text-3xl hover:text-blue-400 transition transform hover:scale-110 duration-200" />
              </a>
              <a
  href="https://twitter.com/intent/tweet?url=https://physiodevny.com&text=Check%20out%20PhysioDev%20NY!&hashtags=PhysicalTherapy,ChiropracticCare"
  target="_blank"
  rel="noreferrer"
  aria-label="Follow us on Twitter"
>
  <FaTwitter className="text-3xl md:text-2xl lg:text-3xl hover:text-blue-400 transition transform hover:scale-110 duration-200" />
</a>

              <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Follow us on Instagram">
                <FaInstagram className="text-3xl md:text-2xl lg:text-3xl hover:text-blue-400 transition transform hover:scale-110 duration-200" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer" aria-label="Follow us on LinkedIn">
                <FaLinkedin className="text-3xl md:text-2xl lg:text-3xl hover:text-blue-400 transition transform hover:scale-110 duration-200" />
              </a>
              <a href="mailto:info@physiodevny.com" target="_blank" rel="noreferrer" aria-label="Email us">
                <FaEnvelope className="text-3xl md:text-2xl lg:text-3xl hover:text-blue-400 transition transform hover:scale-110 duration-200" />
              </a>
            </div>
          </div>
        </div>
  
        {/* Bottom Text */}
        <div className="mt-12 text-center mb-14 lg:mb-2 text-white">
          &copy; {new Date().getFullYear()} PhysioDev NY. All rights reserved.
        </div>
      </div>
    </footer>
  );
}

export default Footer;
