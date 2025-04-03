
const AboutSection = () => {
  return (
    <div className="py-16 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Attorney Image */}
          <div className="md:w-2/5">
            <img 
              src="https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80" 
              alt="Melissa Wilson, Trust Attorney" 
              className="rounded-lg shadow-lg w-full h-auto object-cover aspect-[4/5]"
            />
          </div>
          
          {/* About Text */}
          <div className="md:w-3/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-secondary">About Melissa Wilson</h2>
            <p className="text-lg mb-4 text-secondary/80">
              As a newly certified trust attorney with a passion for helping families protect their legacies, I bring a fresh perspective and dedicated approach to estate planning.
            </p>
            <p className="text-lg mb-4 text-secondary/80">
              My legal education and specialized training in estate law has equipped me with the knowledge and skills needed to navigate the complexities of legacy planning. I believe that every family deserves a personalized approach that reflects their unique values and goals.
            </p>
            <p className="text-lg mb-4 text-secondary/80">
              What sets my practice apart is my commitment to building lasting relationships with clients. I take the time to listen to your concerns, understand your family dynamics, and create solutions that provide both protection and peace of mind.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-3 text-secondary">Educational Background</h3>
              <ul className="list-disc list-inside text-secondary/80 space-y-1">
                <li>J.D., State University Law School</li>
                <li>Certified Specialist in Estate Planning</li>
                <li>Member, State Bar Association</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
