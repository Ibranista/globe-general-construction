
function Divider({ title }: { title?: string }) {
    return (
        <div style={{ position: 'relative', textAlign: 'center', marginTop: '50px' }}>
            <hr style={{ border: '1px solid #fce27d', width: '80%', margin: '0 auto' }} />
            <span style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                background: '#fff',
                padding: '0 10px',
                color: '#355070',
                fontSize: '28px'
            }}>{title}</span>
        </div>
    )
}

export default Divider