export default {
        container: {
          marginBottom: '12px',
          diplay: 'flex',
          flexDirection: 'row'
        },
        button: {
          display: 'flex',
          backgroundColor: '#e7e5e4dd',
          outline: 'none',
          height: '62px',
          width: '300px',
          transition: 'all 0.2s ease-out',
          borderRadius: '9px 9px 9px 9px',
          '&:hover': {
            boxShadow: '0px 10px 10px rgba(0,0,0,0.2)',
            cursor: 'pointer'
          },
          '&:active': {
            boxShadow: '0px 5px 10px rgba(0,0,0,0.2)'
          }
        },
        preview: {
          height: '50px',
          width: '50px',
          display: 'flex',
          alignSelf: 'flex-start',
          marginLeft: '4px',
          borderRadius: '9px 9px 9px 9px',
          boxShadow: '0px 14px 32px 0px rgba(0, 0, 0, 0.15)'
        },
        name: {
          fontFamily: 'Lato',
          fontSize: '1rem',
          paddingTop: '2px',
          color: '#131313',
          marginLeft: '1rem',
          letterSpacing: '.15em',
          textTransform: 'uppercase',
          fontWeight: 'bold'
        },
        '@media (max-width:812px)': {
          name: {
            fontSize: '0.7rem',
            paddingTop: '8px'
          },
          button: {
            width: '240px'
          }
        }
      }