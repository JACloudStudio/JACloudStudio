import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';
import './WhatWeDo.css';

function ServiceCard({ title, description }) {
    const [ref, visible] = useIntersectionObserver();

    return (
        <div
            ref={ref}
            className={`service-card ${visible ? 'visible' : ''}`}
        >
            <div className="card-header">
                <div className="card-dot" />
                <h3>{title}</h3>
            </div>
            <p>{description}</p>

        </div>
    );
}

export default function WhatWeDo() {
    return (
        <section className="whatwedo">
            <div className="whatwedo-header">
                <h2>What We Do</h2>
                <p>
                    We handle the technical side of hosting so your website
                    stays fast, secure, and online — without stress.
                </p>
            </div>

            <div className="whatwedo-grid">
                <ServiceCard
                    title="Deploy"
                    description="We deploy your website on reliable cloud infrastructure using production-grade practices."
                />

                <ServiceCard
                    title="Secure"
                    description="SSL, HTTPS, and safe configurations are handled properly from day one."
                />

                <ServiceCard
                    title="Maintain"
                    description="Monitoring, updates, and fixes are managed quietly in the background."
                />
            </div>
        </section>
    );
}
