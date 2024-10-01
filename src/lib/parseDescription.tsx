export const parseDescription = (description: string | undefined) => {
  if (description) {
    const parts = description.split(/(\*\*.*?\*\*)/g)
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        const highLightText = part.slice(2, -2)
        return (
          <span className='text-usBlue-600' key={index}>
            {highLightText}
          </span>
        )
      }
      return part
    })
  }
  return null
}
