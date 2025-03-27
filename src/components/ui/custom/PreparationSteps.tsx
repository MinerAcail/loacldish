interface PreparationStepsProps {
    steps: string[]
  }
  
  const PreparationSteps = ({ steps }: PreparationStepsProps) => {
    return (
      <div className="bg-white rounded-lg p-4 md:p-6 shadow-sm">
        <h3 className="text-lg font-semibold text-amber-900 mb-4">Preparation</h3>
        <ol className="space-y-4">
          {steps.map((step, index) => (
            <li key={index} className="flex">
              <span className="flex-shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-amber-700 text-white text-sm font-medium mr-3">
                {index + 1}
              </span>
              <p className="text-gray-700">{step}</p>
            </li>
          ))}
        </ol>
      </div>
    )
  }
  
  export default PreparationSteps
  
  