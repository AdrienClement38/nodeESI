# Docker compose down, build and up
compose:
	docker compose build && \
	docker compose down && \
	docker compose up -d
