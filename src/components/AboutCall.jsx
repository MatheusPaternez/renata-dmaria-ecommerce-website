import React from 'react'

const AboutCall = () => {
    return (
        <section className="bg-gray-50 py-12 sm:py-16">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800">About Us</h2>
                <p className="mt-3 text-gray-600 max-w-2xl mx-auto">We are a store dedicated to offering carefully selected products. Learn more about our mission and values.
                </p>
                <div className="mt-6">
                    <a
                        href="/about"
                        className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-5 rounded-md shadow-sm transition-colors"
                        aria-label="Go to about us"
                    >
                        About Us
                    </a>
                </div>
            </div>
        </section>
    )
}

export default AboutCall

