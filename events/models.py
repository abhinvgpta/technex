from django.db import models

class ParentEvents(models.Model):
    name=models.CharField(max_length=70)

class Event(models.Model):
    name = models.CharField(max_length=70)
    side_list = models.TextField()
    parent_event=models.ForeignKey('ParentEvents')	
class Event_Options(models.Model):
    label = models.CharField(max_length=50)
    content = models.TextField()
    event = models.ForeignKey('Event')
    order = models.IntegerField()
# On Python 3: def __str__(self):
