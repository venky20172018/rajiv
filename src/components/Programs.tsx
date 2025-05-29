
import { Book, Calculator, Users, Clock } from 'lucide-react';

const Programs = () => {
  const programs = [
    {
      title: "English Mastery Program",
      icon: <Book className="h-8 w-8 text-primary-600" />,
      description: "Comprehensive English language program focusing on reading, writing, speaking, and communication skills.",
      features: [
        "Grammar and vocabulary building",
        "Creative writing workshops",
        "Public speaking training",
        "English literature appreciation"
      ],
      duration: "Academic Year Program",
      students: "All Grade Levels"
    },
    {
      title: "Mathematics Excellence",
      icon: <Calculator className="h-8 w-8 text-secondary-600" />,
      description: "Advanced mathematics curriculum designed to build strong analytical and problem-solving capabilities.",
      features: [
        "Conceptual learning approach",
        "Real-world problem solving",
        "Mental mathematics training",
        "Competitive exam preparation"
      ],
      duration: "Academic Year Program",
      students: "All Grade Levels"
    }
  ];

  return (
    <section id="programs" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-900 mb-4">
            Our Specialized Programs
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Designed specifically for rural students, our programs provide the foundation 
            needed for success in higher education and professional careers.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          {programs.map((program, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center space-x-4 mb-6">
                <div className="bg-gray-100 p-3 rounded-lg">
                  {program.icon}
                </div>
                <h3 className="text-2xl font-poppins font-bold text-gray-900">{program.title}</h3>
              </div>
              
              <p className="text-gray-600 mb-6 text-lg">{program.description}</p>
              
              <div className="space-y-3 mb-6">
                {program.features.map((feature, idx) => (
                  <div key={idx} className="flex items-center space-x-3">
                    <div className="w-2 h-2 bg-primary-600 rounded-full"></div>
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-6 border-t border-gray-200">
                <div className="flex items-center space-x-2">
                  <Clock className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-600">{program.duration}</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Users className="h-5 w-5 text-gray-500" />
                  <span className="text-gray-600">{program.students}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <button
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-primary-600 text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-primary-700 transition-colors shadow-lg"
          >
            Enroll Your Child Today
          </button>
        </div>
      </div>
    </section>
  );
};

export default Programs;
