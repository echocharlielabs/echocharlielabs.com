# echocharlielabs.com

Company site for Echo Charlie Labs, Inc. — one static page, served via GitHub
Pages, same setup as [worthmyfee.com](https://github.com/echocharlie/worthmyfee.com).

- `index.html` — the page. No build step, no dependencies.
- `CNAME` — custom domain for Pages.

DNS (Porkbun): apex `A` → `185.199.108.153`, `185.199.109.153`,
`185.199.110.153`, `185.199.111.153`; `www` `CNAME` → `echocharlie.github.io`.
Leave the MX / SPF records alone — Porkbun email forwarding depends on them.

Contact address on the page is `hello@echocharlielabs.com`; it needs a
Porkbun email-forward rule to reach a real inbox.
