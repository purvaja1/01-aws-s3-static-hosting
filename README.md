# 01 — AWS S3 Static Website Hosting

## Overview
A daily task scheduler web app deployed on AWS S3 
and served globally via CloudFront CDN with HTTPS.

##  Cloud Services Used
- AWS S3 — static file storage and website hosting
- AWS CloudFront — CDN for fast global delivery and HTTPS
- AWS IAM — bucket policy for public access control

##  Live URL
(https://ddoaohlnh5h4s.cloudfront.net/)

##  Architecture
Browser → CloudFront (HTTPS) → S3 Bucket (HTML/CSS/JS)

##  How to Deploy
1. Create an S3 bucket with static hosting enabled
2. Upload HTML, CSS, JS files
3. Set public bucket policy
4. Create CloudFront distribution pointing to S3
5. Access via CloudFront HTTPS URL

##  What I Learned
- How to host static sites on AWS S3
- How CloudFront CDN improves performance and security
- How to configure IAM bucket policies for public access
