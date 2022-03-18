#!/bin/bash

case $AWS_ENV in
  'DEV')
    source ./aws.dev.env
    ;;

  'PRODUCTION')
    source ./aws.prod.env
    ;;

esac

# Update layers here
# Multiple layers separated by a space
aws lambda update-function-configuration \
  --function-name "$FUNC_NAME" \
  --timeout $TIMEOUT \
  --layers "$LAYER_ARNS" \
  > "$AWS_ENV".layer.log
