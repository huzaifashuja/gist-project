import { Circles } from 'react-loader-spinner'
const Load = () =>
    <Circles
        wrapperStyle={{
            justifyContent: "center", position: 'fixed',
            left: '45%',
            top: '50%'
        }}
        height="80"
        width="80"
        color="#24292e"
        ariaLabel="circles-loading"
        visible={true}
    />

export default Load;
