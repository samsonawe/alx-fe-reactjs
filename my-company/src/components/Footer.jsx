function Footer() {
  return (
    <footer style={{
      backgroundColor: '#333',
      color: '#fff',
      padding: '20px',
      textAlign: 'center',
      marginTop: '40px'
    }}>
        <p>&copy; {new Date().getFullYear()} My Company. All rights reserved.</p>
    </footer>
  )
}

export default Footer