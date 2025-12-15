import React from 'react';
import { Phone, MapPin, Clock } from 'lucide-react';

const Contact: React.FC = () => {
    return (
        <section id="контакты" className="py-20 px-4">
            <div className="container mx-auto text-center max-w-3xl">
                <h2 className="text-5xl md:text-6xl font-bold mb-16">Контакты</h2>

                <div className="space-y-6 text-xl">
                    <div className="flex items-center justify-center gap-4">
                        <Phone className="text-orange-500" />
                        <a href="tel:+79991234567" className="hover:text-orange-500 transition-colors">
                            +7 (999) 123-45-67
                        </a>
                    </div>

                    <div className="flex items-center justify-center gap-4">
                        <MapPin className="text-orange-500" />
                        <span>г. Москва, ул. Примерная, д. 1716</span>
                    </div>

                    <div className="flex items-center justify-center gap-4">
                        <Clock className="text-orange-500" />
                        <span>Ежедневно с 10:00 до 23:00</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;