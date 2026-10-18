
package com.url.shortner.service;

import com.url.shortner.entity.Url;
import com.url.shortner.repository.UrlRepository;
import org.springframework.stereotype.Service;

import java.security.SecureRandom;

@Service
public class UrlService {

    private final UrlRepository urlRepository;
    private final SecureRandom secureRandom = new SecureRandom();

    private static final String CHARACTERS =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    public UrlService(UrlRepository urlRepository) {
        this.urlRepository = urlRepository;
    }

    public Url shortenUrl(String originalUrl) {

        String shortCode;

        do {
            shortCode = generateShortCode();
        } while (urlRepository.existsByShortCode(shortCode));

        Url url = new Url(originalUrl, shortCode);

        return urlRepository.save(url);
    }

    private String generateShortCode() {
        StringBuilder code = new StringBuilder();

        for (int i = 0; i < 6; i++) {
            int index = secureRandom.nextInt(CHARACTERS.length());
            code.append(CHARACTERS.charAt(index));
        }

        return code.toString();
    }


    public String getOriginalUrl(String shortCode) {
        return urlRepository.findByShortCode(shortCode)
                .map(Url::getOriginalUrl)
                .orElseThrow(() -> new RuntimeException("Short URL not found"));
    }

}
