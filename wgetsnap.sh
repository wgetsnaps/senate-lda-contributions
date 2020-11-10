
#!/bin/sh

TARGET_URL=https://www.senate.gov/legislative/Public_Disclosure/contributions_download.htm

wget "${TARGET_URL}" \
      --adjust-extension \
      --convert-links \
      --include-directories 'downloads/,resources/*' \
      --no-host-directories \
      --output-file /dev/stdout \
      --page-requisites \
      --recursive --level 1 \
      --span-hosts \
  | tee ./wget.log

sed -e 's#\.\./\.\./#\./#g' legislative/Public_Disclosure/contributions_download.htm > index.html \
    && rm -r legislative/
