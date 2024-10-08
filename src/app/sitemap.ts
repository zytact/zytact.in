import type { MetadataRoute } from 'next';

export default function sitemap(): MetadataRoute.Sitemap {
    return [
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1.0,
        },
        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/skills`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1.0,
        },

        {
            url: `${process.env.NEXT_PUBLIC_BASE_URL}/projects`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1.0,
        },
    ];
}
