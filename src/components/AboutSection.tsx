
const AboutSection = () => {
  return (
    <div className="py-16 bg-primary/5">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center gap-12">
          {/* Attorney Image */}
          <div className="md:w-2/5">
            <img 
              src="/lovable-uploads/e9a8c92b-c81b-40b7-89ce-2e65957e4d8b.png" 
              alt="Melissa Wilson, Trust Attorney" 
              className="rounded-lg shadow-lg w-full h-auto object-cover"
            />
          </div>
          
          {/* About Text */}
          <div className="md:w-3/5">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-primary">About Melissa Wilson</h2>
            <p className="text-lg mb-4 text-secondary/80">
              Melissa Wilson, Esq. began her legal career as a paralegal after graduating from the University of Miami Paralegal Certificate Program in 2007. She initially worked at the Broward County Clerk of Courts as a Docket Clerk before transitioning to the foreclosure industry, where she worked for major law firms representing banks from 2008 to 2014.
            </p>
            <p className="text-lg mb-4 text-secondary/80">
              In 2012, Melissa founded a legal document preparation company, assisting pro se litigants with state and federal forms, including divorce, immigration, and expungement documents. She then pursued her dream of becoming an attorney, completing her bachelor's degree in Legal Studies at Nova Southeastern University in 2015 and graduating from Florida Coastal School of Law with her Juris Doctor in 2021, despite the challenges of balancing law school and motherhood. Melissa's journey reflects her unwavering perseverance and commitment to her legal career.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-3 text-primary">Educational Background</h3>
              <ul className="list-disc list-inside text-secondary/80 space-y-1">
                <li>J.D., Florida Coastal School of Law (2021)</li>
                <li>B.S. in Legal Studies, Nova Southeastern University (2015)</li>
                <li>Paralegal Certificate, University of Miami (2007)</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;
