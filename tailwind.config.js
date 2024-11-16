/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontSize: {
        12 : ['12px', '20px'],
        14 : ['14px', '20px'],
        16 : ['16px', '22px'],
        18 : ['18px', '28px'],
        20 : ['20px', '28px'],
        24 : ['24px', '32px'],
        28 : ['28px','38px'],
        32 : ['32px', '42px'],
        36 : ['36px','46px'],
        38 : ['38px','48px'],
        42 : ['42px','52px'],
        46 : ['46px','56px'],
        50 : ['50px', '60px'],
        75 : ['75px','85px'],
        96 : ['96px', '106px'],
        116 : ['116px', '106px'],
      },
      colors: {
        'primary' : '#101F4F',
        'secondary' : '#365677',
        'light_green' : '#D9DF44',
        'b1' : '#AFBACA',
        'b2' : '#D7DFE9',
        'l2' : '#F0F3F9',
        'l3' : '#F9FAFB',
      },
      fontFamily: {
        'pop': ['Poppins', 'sans-serif'],
      }
    },
  },
  plugins: [],
}
