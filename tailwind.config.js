/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center:true,
      padding:'16px'
    },
    extend: {
      colors:{
        primary:'#f60b8a',
        dark:'#082f49',
        gray:'#64748b'
      }
    },
  },
  plugins: [],
}

