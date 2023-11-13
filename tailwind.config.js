/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['index.html'],
  theme: {
    container:{
      center:true,
      padding:'16px',
    },
    extend: {
      colors:{
        dark:'#020617',
        primary:'#be123c',
        secondary:'#64748b',
        hitam:'#83A2FF',
      },
      screens:{
        'lg':'1024px',
      },
    },
  },
  plugins: [],
}

