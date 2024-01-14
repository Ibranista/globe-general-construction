import { Flex } from "."

function Card({
    image, title, content
}: {
    image?: string, title?: string, content?: string
}) {
    const IMAGE_PATH = import.meta.env.VITE_ASSETS_PATH;
    return (
        <div
            style={{
                minWidth: '48%',
                height: '200px',
                background: '#355070',
                position: 'relative',
                borderRadius: '5px',
                overflow: 'hidden',
            }}
        >
            <div style={{
                background: '#fce27d', position: 'absolute', inset: 0, width: '50%',
            }}></div>
            <div
                style={{
                    background: '#ffffff',
                    position: 'absolute',
                    boxSizing: 'border-box',
                    inset: 4
                    // borderRadius: '8px',
                    // padding: '15px',
                }}
            >
                <Flex style={{ width: '100%', height: '100%', paddingRight: '20px' }}>
                    <section className="image" style={{ width: '100%', height: '100%' }}>
                        <img src={`${IMAGE_PATH}/${image}`} width='100%'
                            height='100%'
                        />
                    </section>
                    <article style={{ paddingBottom: '10px' }}>
                        <section className="header"
                        >
                            <p style={{ fontWeight: '500', fontSize: '3rem', color: '#355070', margin: 0, paddingTop: 20 }}>{title}</p>
                        </section>
                        <section className="content">
                            <p style={{ fontSize: '16px', lineHeight: '1.6', color: '#002838' }}>
                                {content}
                            </p>
                        </section>
                    </article>
                </Flex>
            </div>
        </div>
    )
}

export default Card