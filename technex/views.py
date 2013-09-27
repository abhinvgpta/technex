# Create your views here.
# Create your views here.
from django.shortcuts import render_to_response
from datetime import datetime
from django.http import HttpResponseRedirect, HttpResponse
from django.template import RequestContext
from django.db import connection, transaction

from events.models import Event_Options , Event,ParentEvents
def mainpage(request):
    e1=ParentEvents.objects.all()
    #e=Event.objects.get(name="Modex")
    #sub_options=Event_Options.objects.filter(event=e).all()
    
    #return HttpResponse(str(sub_options[1]))
    return render_to_response("technex_home.html",{"events":e1,},RequestContext(request))
