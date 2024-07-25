// app/loading.js

export default function Loading() {
    return (
        <div style={spinnerStyle}>
            <div style={spinnerAnimationStyle}></div>
        </div>
    );
}

const spinnerStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    backgroundColor: '#f0f0f0',
};

const spinnerAnimationStyle = {
    border: '4px solid rgba(0, 0, 0, 0.1)',
    borderTop: '4px solid #09f',
    borderRadius: '50%',
    width: '36px',
    height: '36px',
    animation: 'spin 1s linear infinite',
    '@keyframes spin': {
        to: {
            transform: 'rotate(360deg)',
        },
    },
};
