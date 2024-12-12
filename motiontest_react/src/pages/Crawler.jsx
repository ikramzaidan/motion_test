import React, { useState } from 'react';

const Crawler = () => {
    const [url, setUrl] = useState('');
    const [image, setImage] = useState(null);

    const handleSubmit = () => {
        if (url && (url.endsWith('.jpg') || url.endsWith('.png') || url.endsWith('.jpeg') || url.endsWith('.gif'))) {
            setImage(url);
        } else {
            alert('Harap masukkan URL gambar yang valid (jpg, png, jpeg, gif).');
        }
    };

    return (
        <div className="flex flex-col gap-3 w-64">
            <h2>Crawler Gambar:</h2>
            <div className="flex flex-col gap-3">
                <input
                    type="text"
                    placeholder="Masukkan URL Gambar"
                    value={url}
                    onChange={(e) => setUrl(e.target.value)}
                    className="border p-2 rounded"
                />
                <button
                    onClick={handleSubmit}
                    className="w-full bg-blue-400 border rounded text-white text-2xl font-bold p-3"
                >
                    Tampilkan Gambar
                </button>
            </div>
            <div className="mt-5">
                {image && <img src={image} className="w-full h-auto border" />}
            </div>
        </div>
    );
};

export default Crawler;