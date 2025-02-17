import './Section.css';

export default function Section({ children, backgroundcolor, ...boxProps }) {
    return (
        <section style={{backgroundColor: backgroundcolor}} className='section-container'>
            <div {...boxProps}>
                {children}
            </div>
        </section>
    );
}