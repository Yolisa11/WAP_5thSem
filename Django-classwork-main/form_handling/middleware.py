import time

#Middleware for logging, example code
#Function-based middleware to log request processing time

def request_timing_middleware(get_response):
    def middleware(request):
        start_time = time.time()
        response = get_response(request)
        duration = time.time()  - start_time
        print(f"{request.path} took {duration:.4f} seconds. completed with status {response.status_code}.")

        return response
    return middleware