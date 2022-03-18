#!/bin/bash

case $AWS_ENV in
  'DEV')
    source ./aws.dev.env
    ;;

  'PRODUCTION')
    source ./aws.prod.env
    ;;

esac

# Update function code
aws lambda update-function-code \
  --function-name "$FUNC_NAME" \
  --zip-file "fileb://./deploy/function.zip" \
  --region "$AWS_REGION" \
  --profile $AWS_PROFILE \
  > "$AWS_ENV".log

