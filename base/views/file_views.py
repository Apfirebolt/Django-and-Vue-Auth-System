import json
from rest_framework.decorators import api_view, permission_classes
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response
from rest_framework import status
from base.models import DirectoryUsers
from base.serializers import DirectoryUserSerializer


@api_view(['POST', 'GET'])
@permission_classes([IsAuthenticated])
def uploadFile(request):
    if request.method == 'GET':
        directory_users = DirectoryUsers.objects.filter(uploaded_by_id=request.user.id)
        serializer = DirectoryUserSerializer(directory_users, many=True)
        return Response({
            'detail': 'All directory users fetched successfully',
            'data': serializer.data,
        },
            status=status.HTTP_200_OK)
    if request.FILES['file']:
        file = request.FILES['file']
        my_json_obj = json.load(file)
        for oneItem in my_json_obj:
            try:
                DirectoryUsers.objects.create(
                    uploaded_by = request.user,
                    userId=oneItem['userId'],
                    title=oneItem['title'],
                    body=oneItem['body'],
                )
            except Exception as err:
                print('Something went wrong', err)
                return Response('Something went wrong', status=status.HTTP_400_BAD_REQUEST)
    return Response({ 'detail': 'JSON file parsed and uploaded successfully' }, status.HTTP_200_OK)


