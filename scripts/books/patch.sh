#!/bin/bash
curl "http://localhost:4741/books/${ID}" \
--include \
--request PATCH \
--header "Content-Type: application/json" \
--data '{
  "book": {
    "title": "'"${TITLE}"'"
  }
}'

# prints respone using echo

echo

# this would be entered in the terminal using
#
# ID="1" TITLE="NEW BOOK" scripts/books/patch.sh

# the below code allows permission to execute a file
# chmod u+x scripts/books/patch.sh
