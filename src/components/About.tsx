
import { CheckCircle, Target, Heart, Lightbulb } from 'lucide-react';

const About = () => {
  const features = [
    {
      icon: <Target className="h-6 w-6 text-primary-600" />,
      title: "Focused Curriculum",
      description: "Specialized programs in English and Mathematics designed for rural students"
    },
    {
      icon: <Heart className="h-6 w-6 text-secondary-600" />,
      title: "Caring Environment",
      description: "Nurturing and supportive atmosphere where every child feels valued"
    },
    {
      icon: <Lightbulb className="h-6 w-6 text-success-500" />,
      title: "Innovative Teaching",
      description: "Modern teaching methods combined with traditional values"
    },
    {
      icon: <CheckCircle className="h-6 w-6 text-purple-600" />,
      title: "Proven Results",
      description: "Track record of students excelling in higher education and careers"
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-poppins font-bold text-gray-900 mb-4">
            Why Choose Bright Future Academy?
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We understand the unique challenges faced by rural families and are committed 
            to providing world-class education that opens doors to endless opportunities.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          <div>
            <img
              src="https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=600&h=400&fit=crop"
              alt="Students learning mathematics with technology"
              className="rounded-2xl shadow-lg w-full"
            />
          </div>
          <div>
            <h3 className="text-2xl font-poppins font-bold text-gray-900 mb-6">
              Excellence in English & Mathematics
            </h3>
            <p className="text-gray-600 mb-6 text-lg">
              Our specialized curriculum focuses on building strong foundations in English and Mathematics - 
              the two subjects that open the most doors for rural students seeking higher education and career opportunities.
            </p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0" />
                <span className="text-gray-700">Interactive English learning with focus on communication skills</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0" />
                <span className="text-gray-700">Conceptual mathematics teaching for strong problem-solving abilities</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0" />
                <span className="text-gray-700">Regular assessments and personalized attention</span>
              </div>
              <div className="flex items-center space-x-3">
                <CheckCircle className="h-5 w-5 text-success-500 flex-shrink-0" />
                <span className="text-gray-700">Career guidance and higher education counseling</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-xl hover:shadow-lg transition-shadow">
              <div className="flex items-center justify-center w-12 h-12 bg-white rounded-lg mb-4 shadow-sm">
                {feature.icon}
              </div>
              <h4 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h4>
              <p className="text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
