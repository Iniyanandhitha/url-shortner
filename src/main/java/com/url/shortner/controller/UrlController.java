

package com.url.shortner.controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import com.url.shortner.entity.Url;
import com.url.shortner.service.UrlService;
import org.springframework.web.bind.annotation.*;

import java.util.Map;
@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/urls")
public class UrlController {

    private final UrlService urlService;

    public UrlController(UrlService urlService) {
        this.urlService = urlService;
    }

    @PostMapping
    public Map<String, String> shortenUrl(
            @RequestBody Map<String, String> request) {

        String originalUrl = request.get("originalUrl");

        if (originalUrl == null || originalUrl.isBlank()) {
            throw new IllegalArgumentException("URL cannot be empty");
        }

        Url savedUrl = urlService.shortenUrl(originalUrl);

        return Map.of(
                "shortCode", savedUrl.getShortCode(),
                "shortUrl", "http://localhost:8080/" + savedUrl.getShortCode(),
                "originalUrl", savedUrl.getOriginalUrl()
        );
    }



}
