function Quote({ data }) {
  return (
    <div>
      <blockquote>{data.quote}</blockquote>
      <p>{data.name}</p>
    </div>
  )
}

export default Quote
