# List of packages 1 package per line relative to current location
PKG_ML = $(shell go list ./... | sed "s%_$$(pwd)%\.%g")
# List of packages space delimited
PKG = $(shell echo ${PKG_ML} | tr "\n" " ")
# All .go files, excluding the vendors
GOFILES = $(shell find . -type f -name '*.go')

build:
	mkdir -p dist
	gofmt -l -s -w ${GOFILES}
	GOOS=linux GOARCH=amd64 go build -o dist/aws-athena-plugin_linux_amd64 .
	GOOS=darwin GOARCH=amd64 go build -o dist/aws-athena-plugin_darwin_amd64 .
