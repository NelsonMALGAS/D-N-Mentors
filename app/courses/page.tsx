import CourseCards from "@/components/Modules"

const ModulesPage = () => {
  return (
    <div className="min-h-screen p-6 bg-gray-900 shadow-lg rounded-lg overflow-hidden transition-colors duration-300 border-t-4 border-gray-800">
      <h1 className="text-4xl font-extrabold mb-6 text-white">Course Information</h1>
      <CourseCards />
    </div>
  )
}

export default ModulesPage