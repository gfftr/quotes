const Footer = ({ year }) => {
  return (
    <footer>
      <p>
        Quote generator copyright &copy;
        {year === true ? '2022' : ''}
      </p>
    </footer>
  )
}

export default Footer
